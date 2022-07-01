import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { emailValidator } from '../email-validator';
import { passwordValidator } from '../password-validator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  userForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    // Gestion de l'adresse avec un FormGroup imbriqué
    address: this.fb.group({
        street: [''],
        city: [''],
        zipCode: ['']
   }),  
   credentials: this.fb.group({
     email: ['', [Validators.required,emailValidator ]],
     password: ['',[Validators.required, passwordValidator]],
   }),
});

constructor(private fb: FormBuilder) {}
  
onSubmit() {
  console.log(this.userForm.value);
}

}
