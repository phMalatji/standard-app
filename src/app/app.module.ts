import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MegaMenuModule } from 'primeng/megamenu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonService } from './PokemonService';

import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    MegaMenuModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
