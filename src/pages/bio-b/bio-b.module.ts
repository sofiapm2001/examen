import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BioBPage } from './bio-b';

@NgModule({
  declarations: [
    BioBPage,
  ],
  imports: [
    IonicPageModule.forChild(BioBPage),
  ],
})
export class BioBPageModule {}
