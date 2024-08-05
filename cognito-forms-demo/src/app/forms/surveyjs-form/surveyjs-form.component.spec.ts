import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyjsFormComponent } from './surveyjs-form.component';

describe('SurveyjsFormComponent', () => {
  let component: SurveyjsFormComponent;
  let fixture: ComponentFixture<SurveyjsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveyjsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyjsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
