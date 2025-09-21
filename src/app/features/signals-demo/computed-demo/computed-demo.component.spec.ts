import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputedDemoComponent } from './computed-demo.component';

describe('ComputedDemoComponent', () => {
  let component: ComputedDemoComponent;
  let fixture: ComponentFixture<ComputedDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputedDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputedDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
