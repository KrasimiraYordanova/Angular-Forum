import { FormGroup, ValidatorFn } from "@angular/forms";

export function matchingPasswordsGroupValidator(passwordControl: string, rePasswordControl: string): ValidatorFn {
    return (control) => {
        const group = control as FormGroup;
        const passwordControler = group.get(passwordControl);
        const rePasswordControler = group.get(rePasswordControl);
        return passwordControler?.value === rePasswordControler?.value ? null : {matchingPasswordsValidator : true};
    }
}