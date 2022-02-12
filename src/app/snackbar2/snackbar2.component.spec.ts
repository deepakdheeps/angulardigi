import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Snackbar2Component } from './snackbar2.component';

describe('Snackbar2Component', () => {
  let component: Snackbar2Component;
  let fixture: ComponentFixture<Snackbar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Snackbar2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Snackbar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
