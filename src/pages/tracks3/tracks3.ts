import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Tracks3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tracks3',
  templateUrl: 'tracks3.html',
})
export class Tracks3Page {
  cancionesparis = ['1. Pienso en ti', '2. Whenever, wherever', '3. Inevitable', '4. La tortura', '5. Ciega, sordomuda', '6. Loca', '7. Antes de las seis', '8. Hips dont lie','9. Count on me', '10. Waka waka']            


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tracks3Page');
  }

}
