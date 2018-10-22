import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LmPage } from './lm';

@NgModule({
  declarations: [
    LmPage,
  ],
  imports: [
    IonicPageModule.forChild(LmPage),
  ],
})
export class LmPageModule {}
