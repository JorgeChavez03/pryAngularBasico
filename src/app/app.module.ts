import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { DatosComponent } from './components/datos/datos.component';
import { RightComponent } from './components/right/right.component';
import { PostComponent } from './components/post/post.component';
import { PaisComponent } from './components/pais/pais.component';
import { FooterComponent } from './components/footer/footer.component';
import { PeruComponent } from './components/peru/peru.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    DatosComponent,
    RightComponent,
    PostComponent,
    PaisComponent,
    FooterComponent,
    PeruComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
