import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInfoComponent } from './new-info.component';

describe('NewInfoComponent', () => {
  let component: NewInfoComponent;
  let fixture: ComponentFixture<NewInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});