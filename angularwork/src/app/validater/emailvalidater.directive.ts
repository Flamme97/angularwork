import { invalid } from '@angular/compiler/src/render3/view/util';
import { Directive } from '@angular/core';
import {
  AbstractControl,
  EmailValidator,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appEmailvalidater]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailvalidaterDirective,
      multi: true,
    },
  ],
})
export class EmailvalidaterDirective implements Validator {
  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string;
    if (value.includes('test')) {
      return {
        invalidEmail: true
      };
    }
    return null;
  }
}
