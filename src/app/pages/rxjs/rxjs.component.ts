import { Component, OnInit , OnDestroy} from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter} from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit , OnDestroy{

  subscription : Subscription;

  constructor() {

    this.subscription = this.regresaObservable().pipe(
      retry(2)
    )
    .subscribe(
      numero=>console.log('subscrito',numero),
      error =>console.log('error en el obs', error),
      ()=>console.log('finished obs')
    );
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    console.log('la gallina cancelo la suscripcion');
    this.subscription.unsubscribe();
  }

  regresaObservable():Observable<any>{

    return new Observable( (observer: Subscriber<any> )=>{
      let contador = 0 ;
      let intervalo = setInterval(()=>{
        contador +=1;
        
        const salida={
          valor: contador
        };
        
        observer.next(salida);

        //if(contador===2){
          //clearInterval(intervalo);
          //observer.error('auxilio');
        //}

      },1000);
    }).pipe(
      //map(resp =>{return resp.valor;})
      map(resp => resp.valor),
      filter((valor,index)=>{
        //console.log('Filtro',valor,index)
        if ((valor %2 )===1 ){
          //impar
          return true;
        }else{
          //par
          return false;
        }
      })
    );
    

  }

}
