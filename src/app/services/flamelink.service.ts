import * as flamelink from 'flamelink';
import { HomePageModel, CardModel, CardPageModel } from '../models/models';
import { Injectable } from '@angular/core';
import { TopNavModel } from '../models/topnav.model';
import { PlainPageModel } from '../models/plainpage.model';

const app = flamelink({
    apiKey: "AIzaSyDQKhdVEVS4oWNtK-ZKS9kGM9M6f9mHAqU",
    authDomain: "djsitte-21e18.firebaseapp.com",
    databaseURL: "https://djsitte-21e18.firebaseio.com",
    projectId: "djsitte-21e18",
    storageBucket: "djsitte-21e18.appspot.com",
    messagingSenderId: "571269642831"
});     

@Injectable()
export class FlamelinkService{

    //Make sure to always use a cached version of cardUrls because the routes are only loaded once
    private _cardUrls: string[];
    private _plainUrls: string[];

    getHomePage(): Promise<HomePageModel> {
        return app.content.get('homePage')
    }
    
    getEducationCards(): Promise<CardModel[]>{
        return new Promise<CardModel[]>((success, reject) => {
            var promises = new Array<Promise<CardModel>>();
            app.content.get('educationCard').then(cards => {
                console.log(cards);
                for(var id in cards){
                    promises.push(new Promise<CardModel>((s, r) => {
                        var card = cards[id];
                        app.storage.getURL(card.image[0]).then(url => {
                            console.log(url);
                            s(new CardModel(url, card.heading, card.subheading, card.location, card.description));
                        })
                        .catch(r);
                    }));
                }
                Promise.all(promises).then(success).catch(reject);
            })
            .catch(reject);
        })
    }

    private getPageUrls(contentId: string): Promise<string[]>{
        return new Promise<string[]>((success, reject) => {
            app.content.get(contentId).then(pages => {
                var urls = new Array<string>();
                for(var id in pages){
                    urls.push(pages[id].url);
                }
                this._cardUrls = urls;
                success(urls);
            })
            .catch(reject);
        });
    }

    getPlainUrls(): Promise<string[]>{
        if(this._plainUrls) return Promise.resolve(this._plainUrls);
        return this.getPageUrls('plainPage');
    }

    getCardUrls(): Promise<string[]>{
        if(this._cardUrls) return Promise.resolve(this._cardUrls);
        return this.getPageUrls('cardPage');
    }

    getCardPage(url: string): Promise<CardPageModel>{
        return new Promise<CardPageModel>((success, reject) => {
            app.content.getByField('cardPage', 'url', url)
            .then(cardPages => {
                var cardPage;
                for(var i in cardPages){
                    cardPage = cardPages[i];
                    break;
                }
                if(!cardPage) success(null);
                var promises = new Array<Promise<CardModel>>();
                for(var c of cardPage.cards){
                    promises.push(new Promise<CardModel>((s, r) => {
                        var card = c;
                        app.storage.getURL(card.image[0]).then(url => {
                            console.log(url);
                            s(new CardModel(url, card.header, card.subheading1, card.subheading2, card.description));
                        })
                        .catch(r);
                    }));
                }
                Promise.all(promises).then(cards => {
                    success({
                        header: cardPage.heading,
                        cards: cards
                    });
                }).catch(reject);
            })
            .catch(reject);
        });
    }

    getPlainPage(url: string): Promise<PlainPageModel>{
        return new Promise<PlainPageModel>((success, reject) => {
            app.content.getByField('plainPage', 'url', url)
            .then(plainPages => {
                var plainPage;
                for(var i in plainPages){
                    plainPage = plainPages[i]
                    break;
                }
                if(!plainPage) success(null);
                success({
                    content: plainPage.content,
                    heading: plainPage.heading,
                    cssClass: plainPage.cssClass
                });
            })
            .catch(reject);
        })
    }

    getTopNav(): Promise<TopNavModel>{
        return app.content.get('topNav');
    }


    
}