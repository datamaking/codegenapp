import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewRequestComponent } from './view-request/view-request.component';
import { AddRequestComponent } from './add-request/add-request.component';
import { EditRequestComponent } from './edit-request/edit-request.component';
import { GenerateCodeComponent } from './generate-code/generate-code.component';
import { DatatypeMappingComponent } from './datatype-mapping/datatype-mapping.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewRequestComponent,
    AddRequestComponent,
    EditRequestComponent,
    GenerateCodeComponent,
    DatatypeMappingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
