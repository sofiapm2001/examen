import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SongsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-songs',
  templateUrl: 'songs.html',
})
export class SongsPage {
  songsB = ['1. Grenade', '2. Just the way you are', '3. Our first time', 'Runaway baby', 'The lazy song', 'Marry you', 'Talking to the moon', 'Liquor store blues','Count on me', 'The other other side']            

  constructor(public navCtrl: NavController, public navParams: NavParams) {
                            
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SongsPage');
  }

}
