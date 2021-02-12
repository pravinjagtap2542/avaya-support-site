import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnterticketComponent } from './enterticket/enterticket.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'enterticket',
    pathMatch: 'full'
  },
  { path: 'enterticket', component: EnterticketComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ServiceRequestsRoutingModule { }
