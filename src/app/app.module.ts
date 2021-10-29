import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { registerLocaleData } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { VitrinaComponent } from './vitrina/vitrina.component';
import { StockComponent } from './stock/stock.component';
import { AgregarAutorComponent } from './agregar-autor/agregar-autor.component';
import { AgregarEditorialComponent } from './agregar-editorial/agregar-editorial.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { CambiarStockComponent } from './cambiar-stock/cambiar-stock.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    LoginComponent,
    PageNotFoundComponent,
    RegisterComponent,
    NavbarComponent,
    VitrinaComponent,
    StockComponent,
    AgregarAutorComponent,
    AgregarEditorialComponent,
    CerrarSesionComponent,
    CambiarStockComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(
      [{path: 'welcome', component: CarouselComponent},
      {path: 'login', component: LoginComponent},
      {path: 'login/register', component: RegisterComponent},
      {path: 'vitrina', component: VitrinaComponent},
      {path: 'stock', component: StockComponent},
      {path: '',redirectTo:'welcome', pathMatch:'full'},
      {path: '**', component:PageNotFoundComponent}]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
