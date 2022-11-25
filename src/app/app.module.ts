import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './views/login/login.component';
import { InscreverComponent } from './views/inscrever/inscrever.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './views/home/home.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { MaterialModule } from './material/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InscreverComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    AngularFireAuthModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
