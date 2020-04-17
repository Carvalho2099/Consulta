import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ContatoService } from './contato.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/template/nav/nav.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NameEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [
    ContatoService,
    NgModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
