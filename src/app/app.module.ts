import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddtachesComponent } from './addtaches/addtaches.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TachesComponent } from './taches/taches.component';

@NgModule({
  declarations: [
    AppComponent,
    TachesComponent,
    AddtachesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
