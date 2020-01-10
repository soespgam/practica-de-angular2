import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { AppRoutingModule } from './app-routing.module';

//modules
import{PageModule} from'./pages/pages.module';

//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
     RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
