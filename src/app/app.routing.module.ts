import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { BookdetailComponent } from './component/bookdetail/bookdetail.component';
import { BookdetailsComponent } from './component/bookdetails/bookdetails.component';

const routes: Routes = [
    { path: 'detail-component', component: BookdetailsComponent },
    { path: '**', component: BookdetailComponent },
  ];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }