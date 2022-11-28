import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public registerForm = this.fb.group({
    nombre: ['Maikol', Validators.required],
    email: ['maikolsoro.z1998@gmail.com', Validators.required],
    password: ['123456', Validators.required],
    password2: ['123456', Validators.required],
    terminos: [false, Validators.required]
  });

  constructor( private fb: FormBuilder){}

  createUser(){
    console.log(this.registerForm.value);
  }
}
