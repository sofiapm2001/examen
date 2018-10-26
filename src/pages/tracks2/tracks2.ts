import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Tracks2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tracks2',
  templateUrl: 'tracks2.html',
})
export class Tracks2Page {
  cancionesM= ['1. One more night', '2. Payphone', '3. Daylight', '4. Lucky strike','5.The man who never lied', '6. Love somebody', '7. Ladykiller','8. Fortune teller']                             


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tracks2Page');
  }

}
