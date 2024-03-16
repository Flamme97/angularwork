import { invalid } from '@angular/compiler/src/render3/view/util';
import { AbstractControl } from '@angular/forms';

export class Customvalidator {
  static validateName(control: AbstractControl) {
    const value = control.value as string;
    if (value.includes('test')) {
      return {
        invalid: true,
      };
    }
    return null;
  }
  // can be exported to the require place to make the validator
  static ValidateSpecialChar(char: string) {
    return (control: AbstractControl) => {
      const value = control.value as string;
      if (value.includes(char)) {
        return {
          invalid: true,
        };
      }
      return null;
    };
  }
}
