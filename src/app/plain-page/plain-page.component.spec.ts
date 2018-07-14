import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainPageComponent } from './plain-page.component';

describe('PlainPageComponent', () => {
  let component: PlainPageComponent;
  let fixture: ComponentFixture<PlainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
