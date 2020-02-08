import { NgModule } from "@angular/core";
import { PAGES_ROUTES } from './pages.routes';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from "@angular/forms";

import { PagesComponent } from './pages.component';

import { DaschboardComponent } from './daschboard/daschboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

//ngcharts
import { ChartsModule } from 'ng2-charts';
import { GraficasDonaComponent } from '../components/graficas-dona/graficas-dona.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

//tempo

@NgModule({
    declarations:[
        PagesComponent,
        DaschboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficasDonaComponent,
        AccoutSettingsComponent,
        PromesasComponent,
        RxjsComponent
    ],
    exports:[
        DaschboardComponent,
        ProgressComponent,
        Graficas1Component,  
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
      ]
})

export class PageModule{}