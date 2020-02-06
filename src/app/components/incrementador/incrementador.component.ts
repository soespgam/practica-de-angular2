import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild("txtProgress" , {static: true}) txtProgress: ElementRef;

  @Input('nombre') leyenda: string = 'leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    //console.log('leyenda', this.leyenda);
    //console.log('progreso', this.progreso);
  }


  ngOnInit() {
    //console.log('leyenda', this.leyenda);
    //console.log('progreso', this.progreso);
  }

  onChanges(newValue: number) {
    //let elemHTML:any = document.getElementsByName('progreso')[0];
    //console.log(this.txtProgress);

    if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    //elemHTML.value = Number(this.progreso);
    this.txtProgress.nativeElement.value= this.progreso;
    this.cambioValor.emit(this.progreso);

  }
  cambiarValor(Valor: number) {

    if (this.progreso >= 100 && Valor > 0) {
      this.progreso = 100;
      return;
    }

    if (this.progreso <= 0 && Valor < 0) {
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + Valor;
    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }

}
