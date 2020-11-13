import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookdetailComponent } from './component/bookdetail/bookdetail.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';

import { BookdetailsComponent } from './component/bookdetails/bookdetails.component';
import { LoaderComponent} from './component/loader/loader.component';
import { AgGridModule } from 'ag-grid-angular';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoaderService } from '../app/service/loader.service';
import { LoaderInterceptor } from './Interceptor/loader.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    BookdetailComponent,
    BookdetailsComponent,
    LoaderComponent

  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    AppRoutingModule,
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,  
    MatProgressSpinnerModule
  ],
  providers: [LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
