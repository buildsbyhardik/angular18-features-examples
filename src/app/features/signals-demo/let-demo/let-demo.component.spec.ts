import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetDemoComponent } from './let-demo.component';

describe('LetDemoComponent', () => {
  let component: LetDemoComponent;
  let fixture: ComponentFixture<LetDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
