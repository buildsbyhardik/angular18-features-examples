import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowayDemoComponent } from './twoway-demo.component';

describe('TwowayDemoComponent', () => {
  let component: TwowayDemoComponent;
  let fixture: ComponentFixture<TwowayDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwowayDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwowayDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
