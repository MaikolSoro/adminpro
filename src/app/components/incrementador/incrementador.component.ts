import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})
export default class IncrementadorComponent implements OnInit {

  ngOnInit() {
      this.btnClass = `btn ${ this.btnClass }`;
  }

  @Input('valor') progreso: number = 50;
  @Input() btnClass: string = 'btn-primary';

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();

  cambiarValor(valor: number){

    if( this.progreso >= 100 && valor >= 0){
      this.valorSalida.emit(100);
     return this.progreso = 100;
    }
    if( this.progreso <= 0 && valor < 0){
      this.valorSalida.emit(0);
      return this.progreso = 0;
     }
     this.progreso = this.progreso + valor;
    return this.valorSalida.emit(this.progreso + valor);
  }
  onChange(newValor: number){

    if(newValor >= 100) {
      this.progreso = 100;
    } else if(newValor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValor;
    }
    this.valorSalida.emit( this.progreso );
  }
}
