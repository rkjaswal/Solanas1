import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainsCurriesComponent } from './mains-curries.component';

describe('MainsCurriesComponent', () => {
  let component: MainsCurriesComponent;
  let fixture: ComponentFixture<MainsCurriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainsCurriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainsCurriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
