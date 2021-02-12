import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routes//home/home.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'service-requests',
    loadChildren: () => import('./routes/service-requests/service-requests.module').then(m => m.ServiceRequestsModule),
    data: {
      title: 'Service Requests',
    },
  },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
