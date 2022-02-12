import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Snackbar3Component } from './snackbar3.component';

describe('Snackbar3Component', () => {
  let component: Snackbar3Component;
  let fixture: ComponentFixture<Snackbar3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Snackbar3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Snackbar3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
