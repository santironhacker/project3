import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPlacesComponent } from './about-places.component';

describe('AboutPlacesComponent', () => {
  let component: AboutPlacesComponent;
  let fixture: ComponentFixture<AboutPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
