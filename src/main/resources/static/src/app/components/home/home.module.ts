import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from '../../components/alert/alert.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{
      path: '',
      component: HomeComponent
    }]),
  ],
  declarations: [HomeComponent,
     AlertComponent
  ]
})
export class HomeModule { }
