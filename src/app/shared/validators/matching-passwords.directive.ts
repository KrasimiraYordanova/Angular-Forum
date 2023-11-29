import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appMatchingPasswords]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MatchingPasswordsDirective,
      multi: true
    }
  ]
})
export class MatchingPasswordsDirective implements OnChanges, Validator {

  @Input() appMatchingPasswords: string | null = null;

  validator: ValidatorFn = () => null;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {

  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    console.log(control);
    return this.validator(control);
  }

}
