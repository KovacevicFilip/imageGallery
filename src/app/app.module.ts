import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AlbumiMrezaComponent } from './albumi-mreza/albumi-mreza.component';
import { PojedinacniAlbumiComponent } from './albumi-mreza/pojedinacni-albumi/pojedinacni-albumi.component';
import { CarouselComponent } from './albumi-mreza/pojedinacni-albumi/carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlbumiMrezaComponent,    
    PojedinacniAlbumiComponent, CarouselComponent, 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
