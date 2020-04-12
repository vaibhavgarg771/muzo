import { Injectable } from "@angular/core";
import { ValidationErrors, AbstractControl } from '@angular/forms';

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

    public passwordMatch(control: AbstractControl){
        const password = control.get('passord').value;
        const confPassword = control.get('confirmPassword').value;
        if(password !== confPassword){
            control.get('confirmPassword').setErrors({PasswordMatch: false});
        }
    }
}