import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavComponentComponent } from './top-nav-component.component';

describe('TopNavComponentComponent', () => {
  let component: TopNavComponentComponent;
  let fixture: ComponentFixture<TopNavComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopNavComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
