import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BrunoPage } from './bruno';

@NgModule({
  declarations: [
    BrunoPage,
  ],
  imports: [
    IonicPageModule.forChild(BrunoPage),
  ],
})
export class BrunoPageModule {}
