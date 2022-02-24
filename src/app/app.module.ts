import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormUtilisateurComponent } from './form-utilisateur/form-utilisateur.component';
import { FormConnexionComponent } from './form-connexion/form-connexion.component';

import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { MdpPerduComponent } from './mdp-perdu/mdp-perdu.component';



@NgModule({
  declarations: [
    AppComponent,
    FormUtilisateurComponent,
    FormConnexionComponent,
    MdpPerduComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

