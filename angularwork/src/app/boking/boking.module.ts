import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BokingRoutingModule } from './boking-routing.module';
import { BokingComponent } from './boking.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
@NgModule({
  declarations: [BokingComponent],
  imports: [
    CommonModule,
    BokingRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
})
export class BokingModule {}
