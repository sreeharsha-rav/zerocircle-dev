import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CognitoFormComponent } from './cognito-form.component';

describe('CognitoFormComponent', () => {
  let component: CognitoFormComponent;
  let fixture: ComponentFixture<CognitoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CognitoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CognitoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
