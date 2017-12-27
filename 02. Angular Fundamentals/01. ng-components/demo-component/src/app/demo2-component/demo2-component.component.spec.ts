import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo2ComponentComponent } from './demo2-component.component';

describe('Demo2ComponentComponent', () => {
  let component: Demo2ComponentComponent;
  let fixture: ComponentFixture<Demo2ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo2ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
