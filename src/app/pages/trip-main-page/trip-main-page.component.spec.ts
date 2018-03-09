import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripMainPageComponent } from './trip-main-page.component';

describe('TripMainPageComponent', () => {
  
  let component: TripMainPageComponent;
  let fixture: ComponentFixture<TripMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
