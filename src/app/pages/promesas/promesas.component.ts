import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html'
})
export class PromesasComponent implements OnInit {


  constructor(){}

  ngOnInit(): void {
    this.getUsuarios().then(user => {
      console.log(user);
    });
    // const promesa = new Promise( (resolve, reject) => {

    //   if ( false ){
    //     resolve('Hola mundo');
    //   } else {
    //       reject('Algo salio mal');
    //   }
     
    // });
    // promesa.then( (mensaje) => {
    //   console.log( mensaje);
    // })
    // .then( error => console.log('Error en mi promesa', error));
    // console.log('Fin del Init');
  }
  getUsuarios() {
    
    return new Promise( resolve => {

      fetch('https://regres.in/api/users')
      .then( resp=>  resp.json())
      .then( body => resolve( body.data));
    });
  
  }
}
