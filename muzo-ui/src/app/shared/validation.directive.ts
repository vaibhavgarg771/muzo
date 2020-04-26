import { ValidatorFn, ValidationErrors, AbstractControl, FormGroup } from '@angular/forms';

export function patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        if (!control.value) {
            return null;
        }
        const valid = regex.test(control.value);
        return valid ? null : error;
    }
}

export const passwordNotMatch: ValidatorFn = (formGroup: FormGroup): ValidationErrors | null => {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');
    if (password.value && confirmPassword.value && password.value !== confirmPassword.value) {
        confirmPassword.setErrors({ passwordNotMatch: true });
        return { passwordNotMatch: true };
    }
    return null;
}
