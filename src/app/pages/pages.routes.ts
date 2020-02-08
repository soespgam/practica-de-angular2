import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from './pages.component';
import { DaschboardComponent } from './daschboard/daschboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const pagesRoutes:Routes=[
    {
      path:'', 
      component:PagesComponent,
      children:[
            {path:'dashboard',component:DaschboardComponent , data:{ titulo:'Dashboard'}},
            {path: 'progress', component:ProgressComponent , data:{titulo:'Progress'}},
            {path: 'graficas1', component:Graficas1Component , data:{titulo: 'Graficas'}},
            {path: 'promesas', component:PromesasComponent , data:{titulo: 'Promesas'}},
            {path: 'rxjs', component:RxjsComponent , data:{titulo:'rxjs'}},
            {path: 'account-setings', component:AccoutSettingsComponent , data:{titulo: 'Ajustes de Tema'}},
            {path:'',redirectTo:'/dashboard', pathMatch:'full'}
            
        ]
    },
  ];
  export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);