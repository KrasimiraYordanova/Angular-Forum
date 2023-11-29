import { ValidatorFn } from "@angular/forms";

export function emailValidator(domains: string[]): ValidatorFn {
    const domainsString = domains.join('|');
    const regExp = new RegExp(`^[^@]{6,}@gmail\.(${domainsString})$`);
    return (control) => {
        return regExp.test(control.value) ? null : { emailValidator : true };
    }
}


// export const emailValidator: ValidatorFn = (control) => {
//     return /[^@]{6,}@gmail\.(com|bg)/
// }