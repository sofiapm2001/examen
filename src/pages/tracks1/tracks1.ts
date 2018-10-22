import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Tracks1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tracks1',
  templateUrl: 'tracks1.html',
})
export class Tracks1Page {
  cancionesL =[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cancionesL= ['1. Entregate', '2. Oro de ley', '3. Tengo todo excepto a ti', '4.Sera que no me amas', '5. Amante del amor', '6. Hoy el aire huele a ti',' 7. Cuestion de piel', '8. Mas alla de todo', '9. Alguien como tu', '10. Mas']
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Tracks1Page');
  }

}
