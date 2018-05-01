import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreventivePage } from './preventive';

@NgModule({
  declarations: [
    PreventivePage,
  ],
  imports: [
    IonicPageModule.forChild(PreventivePage),
  ],
})
export class PreventivePageModule {}
