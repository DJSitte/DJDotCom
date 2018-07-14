import { Injectable } from "@angular/core";
import { FlamelinkService } from "./flamelink.service";
import { Route } from "@angular/router";
import { CardPageComponent } from "../card-page/card-page.component";
import { PlainPageComponent } from "../plain-page/plain-page.component";

@Injectable()
export class RoutingService{

    private _routes: Route[];

    constructor(protected flamelink: FlamelinkService){
        this._routes = new Array<Route>();
    }    

    configureRoutes(): Promise<void>{
        return new Promise((success, reject) => {
            var promises = new Array<Promise<void>>();
            
            promises.push(new Promise<void>((s, r) => {
                this.flamelink.getCardUrls().then(urls => {
                    for(var url of urls){
                        this._routes.push({
                            path: url.startsWith("/") ? url.slice(1) : url,
                            component: CardPageComponent
                        })
                    }
                    s();
                })
            }));

            promises.push(new Promise<void>((s, r) => {
                this.flamelink.getPlainUrls().then(urls => {
                    for(var url of urls){
                        this._routes.push({
                            path: url.startsWith("/") ? url.slice(1) : url,
                            component: PlainPageComponent
                        })
                    }
                    s();
                })
            }));

            Promise.all(promises).then(() => success());
        });
    }

    getRoutes(): Route[] {
        return this._routes;
    }
}