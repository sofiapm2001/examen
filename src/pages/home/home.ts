import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LmPage } from '../lm/lm';
import { BioluisPage } from '../bioluis/bioluis';
import { Tracks1Page } from '../tracks1/tracks1';
import { Resenas1Page } from '../resenas1/resenas1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lm = LmPage
  bioluis = BioluisPage
  tracks1 = Tracks1Page
  resenas1 = Resenas1Page

  constructor(public navCtrl: NavController) {

  }
  clicklmFoto(){
    this.navCtrl.push(this.lm);
    }
  
    clickbioluis(){
      this.navCtrl.push(this.bioluis);
      }
      clicktracks1(){
        this.navCtrl.push(this.tracks1);
        
        }
        clickresenas1(){
          this.navCtrl.push(this.resenas1);
          
          }

      
    

}
