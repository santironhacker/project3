import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTripsComponent } from './about-trips.component';

describe('AboutTripsComponent', () => {
  let component: AboutTripsComponent;
  let fixture: ComponentFixture<AboutTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
