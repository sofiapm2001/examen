import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShakiraPage } from './shakira';

@NgModule({
  declarations: [
    ShakiraPage,
  ],
  imports: [
    IonicPageModule.forChild(ShakiraPage),
  ],
})
export class ShakiraPageModule {}
