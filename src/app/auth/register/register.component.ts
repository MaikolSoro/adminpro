import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public formSubmitted = false;

  public registerForm = this.fb.group({
    nombre: ['Maikol', Validators.required],
    email: ['maikolsoro.z1998@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', Validators.required],
    password2: ['123456', Validators.required],
    terminos: [false, Validators.required]
  }, {
    validators: passwordsIguales('password', 'password2'),
  });

  constructor( private fb: FormBuilder){}

  createUser(){
    this.formSubmitted = true;
    
    console.log(this.registerForm);
    if(this.registerForm.valid){
      console.log('posteando form');
    } else {
      console.log('Form no es correcto');
    }
  }
  campoNoValido(campo: string): boolean {
     
      if( this.registerForm.get(campo)?.invalid && this.formSubmitted){
        return true;
      } else {
        return false;
      }
  }
  aceptarTerminos() {
    return !this.registerForm.get('terminos')?.value && this.formSubmitted;
  }
  
  contrasenasNoValidate() {
    const pass1 = this.registerForm.get('password')?.value && this.formSubmitted;
    const pass2 = this.registerForm.get('password2')?.value && this.formSubmitted;
    
    if((pass1 !== pass2) && this.formSubmitted){
      return true;
    } else {
      return false;
    }
  }

  passwordsIguales(pass1Name: string, pass2Name: string) {
      return ( formGroup: FormGroup) => {

        const pass1Control = formGroup.get(pass1Name);
        const pass2Control = formGroup.get(pass2Name);

        if(pass1Control?.value === pass2Control?.value) {
          pass2Control?.setErrors(null)
        } else {
          pass2Control?.setErrors({ noEsIgual: true })
        }
      }
  }
}
