import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { RegisterdialogModule } from '../../dialogs/registerdialog/registerdialog.module';


@NgModule({
  imports: [
    RegisterdialogModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{
      path: '',
      component: HomeComponent
    }]),
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
