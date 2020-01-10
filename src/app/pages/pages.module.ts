import { NgModule } from "@angular/core";
import { PAGES_ROUTES } from './pages.routes';
import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';

import { DaschboardComponent } from './daschboard/daschboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';



@NgModule({
    declarations:[
        PagesComponent,
        DaschboardComponent,
        ProgressComponent,
        Graficas1Component,
    ],
    exports:[
        DaschboardComponent,
        ProgressComponent,
        Graficas1Component,  
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
      ]
})

export class PageModule{}