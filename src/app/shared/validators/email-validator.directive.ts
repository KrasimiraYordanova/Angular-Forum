import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { emailValidator } from './email-validator';

@Directive({
  selector: '[appEmailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true
    }
  ]
})
export class EmailValidatorDirective implements OnChanges, Validator {

  @Input() appEmailValidator: string[] = [];

  validator: ValidatorFn = () => null;

  constructor() { }

  ngOnChanges(changes: SimpleChanges):void {
    console.log(this.validator);
    console.log(changes);
    const emailValidatorOnChange = changes['appEmailValidator'];
    if(emailValidatorOnChange) {
      this.validator = emailValidator(emailValidatorOnChange.currentValue);
      console.log(this.validator);
    }
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    console.log(control);
    return this.validator(control);
  }


  // registerOnValidatorChange(fn: () => void): void { // }
}
