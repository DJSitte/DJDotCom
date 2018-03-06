import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentProjectsComponentComponent } from './current-projects-component.component';

describe('CurrentProjectsComponentComponent', () => {
  let component: CurrentProjectsComponentComponent;
  let fixture: ComponentFixture<CurrentProjectsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentProjectsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentProjectsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
