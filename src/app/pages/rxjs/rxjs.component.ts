import { Component } from '@angular/core';
import { Observable, retry } from 'rxjs';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html'
})
export class RxjsComponent {

  constructor() {
    
    
   this.retornaObservable().pipe(
      retry()
    )

    .subscribe(
      valor => console.log('Subs:', valor),
      error => console.warn('Error:', error),
      () => console.info('Obs terminado')
    );
  }
  retornaObservable(): Observable<number> {
    let i = -1;
    return new Observable<number>( observer => {
     
      const intervalo = setInterval(()=> {
        i++;
        observer.next(i);

        if( i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }
        if(i === 2){
          observer.error('Llego al valor 2')
        }
      }, 1000);
    });
   
  }
}
