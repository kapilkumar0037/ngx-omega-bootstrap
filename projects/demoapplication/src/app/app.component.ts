import { Component } from '@angular/core';
import { PasswordStrengthMeterComponent } from '../../../ngx-omega-bootstrap/src/password-strength-meter/component/password-strength-meter.component';
import { AbstractControl, FormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UsernameComponent } from '../../../ngx-omega-bootstrap/src/username/component/username.component';
import { CustomCheckboxComponent } from '../../../ngx-omega-bootstrap/src/custom-checkbox';
import { CustomInputComponent } from '../../../ngx-omega-bootstrap/src/custom-input';
import { CustomSelectComponent } from '../../../ngx-omega-bootstrap/src/custom-select';
import { IOptions } from '../../../ngx-omega-bootstrap/src/utils/src/models';
import { CustomRadioComponent } from '../../../ngx-omega-bootstrap/src/custom-radio-group';
import { CustomRangeComponent } from '../../../ngx-omega-bootstrap/src/custom-range';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    NgClass,
    PasswordStrengthMeterComponent,
    FormsModule, UsernameComponent,
    CustomCheckboxComponent,
    CustomInputComponent,
    CustomSelectComponent,
    CustomRadioComponent,
    CustomRangeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demoapplication';
  password = '';
  username = 'Testing'
  isChecked: boolean = true;
  email = '';
  phone = '';
  selected = "";
  isChecked1 = false;
  radioOption: IOptions[] = [{ value: '1', label: 'Male' }, { value: '2', label: 'Female' }];
  selectedRadio = "1";
  selectedRangeValue = 3;
  validators = [
    { validator: Validators.required, message: 'Username is required.' },
    { validator: Validators.minLength(5), message: 'Username must be at least 5 characters long.' },
  ]

  emailValidators = [
    { validator: Validators.required, message: 'Email is required.' },
    { validator: Validators.minLength(5), message: 'Email must be at least 5 characters long.' },
    { validator: Validators.email, message: 'Please enter a valid email.' }
  ]

  phoneValidators = [
    { validator: Validators.required, message: 'Phone number is required.' },
    { validator: Validators.pattern(/^[0-9]{10}$/), message: 'Please enter a valid phone number.' },
  ]
  checkboxValidators = [
    { validator: Validators.requiredTrue, message: 'You must accept the terms and conditions.' },
  ];
  pwdStrengthOutput(output: any) {
    console.log(output);
  }

  selectValidators = [
    { validator: Validators.required, message: 'This is a required field.' }
  ]

  rangeValidators = [
    { validator: this.rangeValidator(1), message: 'Please enter a valid range.' }
  ]

  rangeValidator(min: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      return value > min ? null : { rangeRequired: { minValue: min } };
    };
  }
}
