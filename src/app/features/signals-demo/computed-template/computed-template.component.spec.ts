import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputedTemplateComponent } from './computed-template.component';

describe('ComputedTemplateComponent', () => {
  let component: ComputedTemplateComponent;
  let fixture: ComponentFixture<ComputedTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputedTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputedTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
