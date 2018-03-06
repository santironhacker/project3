import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPlacesMapComponent } from './about-places-map.component';

describe('AboutPlacesMapComponent', () => {
  let component: AboutPlacesMapComponent;
  let fixture: ComponentFixture<AboutPlacesMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPlacesMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPlacesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
