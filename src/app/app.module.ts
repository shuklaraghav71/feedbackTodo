import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RkstodoComponent } from './rkstodo/rkstodo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {TextFieldModule} from '@angular/cdk/text-field';
import { PracticesComponent } from './practices/practices.component';
@NgModule({
  declarations: [
    AppComponent,
    RkstodoComponent,
    PracticesComponent,

  ],
  imports: [
    FormsModule,MatInputModule,TextFieldModule,
    MatButtonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatIconModule,MatCardModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
