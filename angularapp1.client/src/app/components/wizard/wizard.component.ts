import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent {
  currentStep = 1;

  step1Form: FormGroup;
  step2Form: FormGroup;
  step3Form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.step1Form = this.fb.group({
      name: [''] // No Validators
    });

    this.step2Form = this.fb.group({
      email: [''] // No Validators
    });

    this.step3Form = this.fb.group({
      address: [''] // No Validators
    });
  }

  nextStep() {
    if (this.currentStep < 4) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  goToStep(step: number) {
    this.currentStep = step;
  }

  submitWizard() {
    console.log('Wizard submitted!');
    console.log('Step 1 Data:', this.step1Form.value);
    console.log('Step 2 Data:', this.step2Form.value);
    console.log('Step 3 Data:', this.step3Form.value);
  }
}
