import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LmPage } from '../lm/lm';
import { BioluisPage } from '../bioluis/bioluis';
import { Tracks1Page } from '../tracks1/tracks1';
import { Resenas1Page } from '../resenas1/resenas1';
import { BrunoPage } from '../bruno/bruno';
import { SongsPage } from '../songs/songs';
import { BioBPage } from '../bio-b/bio-b';
import { ResenaBPage } from '../resena-b/resena-b';
import { MaroonPage } from '../maroon/maroon';
import { BioAdamPage } from '../bio-adam/bio-adam';
import { Tracks2Page } from '../tracks2/tracks2';
import { ShakiraPage } from '../shakira/shakira';
import { BioshakiraPage } from '../bioshakira/bioshakira';
import { ResenamaroonPage } from '../resenamaroon/resenamaroon';
import { Tracks3Page } from '../tracks3/tracks3';
import { ResenaparisPage } from '../resenaparis/resenaparis';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lm = LmPage
  bioluis = BioluisPage
  tracks1 = Tracks1Page
  resenas1 = Resenas1Page
  bruno = BrunoPage
  songs = SongsPage
  bioB = BioBPage
  resenab = ResenaBPage
  maroon = MaroonPage
  bioAdam = BioAdamPage
  tracks2 = Tracks2Page
  shakira = ShakiraPage
  bioshakira = BioshakiraPage
  resenamaroon = ResenamaroonPage
  tracks3 = Tracks3Page
  resenaparis = ResenaparisPage

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
          clickbruno(){
            this.navCtrl.push(this.bruno);
            
            }
   clicksongs(){
      this.navCtrl.push(this.songs);
              
    }
  clickbioB(){
    this.navCtrl.push(this.bioB);
                
    }
    clickresenaB(){
      this.navCtrl.push(this.resenab);
                  
      }
      clickmaroon(){
        this.navCtrl.push(this.maroon);
                    
        }
        clickbioAdam(){
          this.navCtrl.push(this.bioAdam);
                      
          }
          clicktracks2(){
            this.navCtrl.push(this.tracks2);
                        
            }
            clickbioshakira(){
              this.navCtrl.push(this.bioshakira);
                          
              }
              clickresenamaroon(){
                this.navCtrl.push(this.resenamaroon);
                            
                }
                clicktracks3(){
                  this.navCtrl.push(this.tracks3);
                              
                  }
                  clickresenaparis(){
                    this.navCtrl.push(this.resenaparis);
                                
                    }
    
  


      
    

}
