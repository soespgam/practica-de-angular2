import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
    ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor(@Inject(DOCUMENT) private _document, ) {
    this.cargarAjustes();
  }

  guardarAjustes() {
    //console.log('esta en el localstorage');
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes() {
    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      //console.log('cargado del localstoage');
      this.aplicarTema(this.ajustes.tema);

    } else {
      //console.log('valores de defecto');
      this.aplicarTema(this.ajustes.tema);
    }
  }

  aplicarTema(tema) {
    let url = `assets/css/colors/${tema}.css`
    this._document.getElementById('tema').setAttribute('href', url);

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.guardarAjustes();
  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
};
