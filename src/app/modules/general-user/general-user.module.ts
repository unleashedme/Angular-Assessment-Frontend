import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralUserRoutingModule } from './general-user-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    GeneralUserRoutingModule
  ]
})
export class GeneralUserModule { }
