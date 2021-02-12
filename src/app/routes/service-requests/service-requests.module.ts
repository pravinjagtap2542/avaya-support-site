import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterticketComponent } from './enterticket/enterticket.component';

import { ServiceRequestsRoutingModule } from './service-requests-routing.module'

@NgModule({
  declarations: [EnterticketComponent],
  imports: [
    CommonModule,
    ServiceRequestsRoutingModule
  ]
})
export class ServiceRequestsModule { }
