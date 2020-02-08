import { Component, OnInit } from '@angular/core';
import { resolve } from 'url';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

      this.contarTres().then(
      mensaje =>console.log('finished',mensaje)
    ).catch(error => console.error('error de promesa',error));
    

   }

  ngOnInit() {
  }

  contarTres(): Promise<boolean>{
    return new Promise((resolve,reject)=>{
      let contador=0;

      let intervalo = setInterval(()=>{
        contador +=1;
        console.log(contador);
        if (contador ===3){
          resolve();
          //reject('esto es solo un error');
          clearInterval(intervalo);
        }
      },1000);
    });
    
  }
   
}
