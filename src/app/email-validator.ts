import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    const emailRegex = RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');
    const valid = emailRegex.test(control.value);

    const errors = {
        email: {
            rules: 'le format de l\'email n\'est pas correct',
        }
    };

    return !valid ? errors : null;
}