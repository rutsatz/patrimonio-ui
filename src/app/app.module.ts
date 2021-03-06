import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DataTableModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemCadastroComponent } from './item-cadastro/item-cadastro.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemCadastroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
