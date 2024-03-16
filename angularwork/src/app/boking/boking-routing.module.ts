import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BokingComponent } from './boking.component';
import { BookingGuard } from './guards/booking.guard';

const routes: Routes = [{ path: '', component: BokingComponent , canDeactivate: [BookingGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BokingRoutingModule { }
