import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPassworddirective]',
  standalone: true
})
export class PassworddirectiveDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value || '';

    // Regular expressions for password validation
    const hasAlphabet = /[a-zA-Z]/.test(value);  // At least one letter
    const hasNumber = /[0-9]/.test(value);       // At least one number
    const hasSymbol = /[^a-zA-Z0-9]/.test(value); // At least one special character

    // const isValid = hasAlphabet && hasNumber && hasSymbol;

    // return isValid ? null : { passwordStrength: true };
    return hasAlphabet && hasNumber && hasSymbol ? null : { passwordStrength: true };
  }
}


