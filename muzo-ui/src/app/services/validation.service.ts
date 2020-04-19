import { Injectable } from "@angular/core";
import { ValidationErrors, AbstractControl, FormGroup } from '@angular/forms';

@Injectable({
    providedIn:'root'
})
export class ValidationService{

    public patternValidator(regex:RegExp, error: ValidationErrors){
        return (control: AbstractControl): {[key:string]: any} => {
            if(!control.value){
                return null;
            }
            const valid = regex.test(control.value);
            return valid ? null: error;
        }
    }

    public passwordNotMatch(formGroup: FormGroup){
        const password = formGroup.get('password').value;
        const confirmPassword = formGroup.get('confirmPassword').value;
        const match = (password === confirmPassword);
        return match ? null: {passwordNotMatch: true};
    }
}