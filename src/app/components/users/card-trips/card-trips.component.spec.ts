import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTripsComponent } from './card-trips.component';

describe('CardTripsComponent', () => {
  let component: CardTripsComponent;
  let fixture: ComponentFixture<CardTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
