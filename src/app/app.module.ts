import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { DataValuesComponent } from './data-values/data-values.component';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentComponent,
    DataValuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MaterialModule,
    HttpClientModule,
  ],
  entryComponents: [
    DataValuesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
