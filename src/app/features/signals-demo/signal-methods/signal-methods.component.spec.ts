import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalMethodsComponent } from './signal-methods.component';

describe('SignalMethodsComponent', () => {
  let component: SignalMethodsComponent;
  let fixture: ComponentFixture<SignalMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalMethodsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
