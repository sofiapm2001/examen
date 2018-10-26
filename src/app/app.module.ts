import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LmPage } from '../pages/lm/lm';
import { BioluisPage } from '../pages/bioluis/bioluis';
import { Tracks1Page } from '../pages/tracks1/tracks1';
import { Resenas1Page } from '../pages/resenas1/resenas1';
import { BrunoPage } from '../pages/bruno/bruno';
import { SongsPage } from '../pages/songs/songs';
import { BioBPage } from '../pages/bio-b/bio-b';
import { ResenaBPage } from '../pages/resena-b/resena-b';
import { MaroonPage } from '../pages/maroon/maroon';
import { BioAdamPage } from '../pages/bio-adam/bio-adam';
import { Tracks2Page } from '../pages/tracks2/tracks2';
import { ShakiraPage } from '../pages/shakira/shakira';
import { BioshakiraPage } from '../pages/bioshakira/bioshakira';
import { ResenamaroonPage } from '../pages/resenamaroon/resenamaroon';
import { Tracks3Page } from '../pages/tracks3/tracks3';
import { ResenaparisPage } from '../pages/resenaparis/resenaparis';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LmPage,
    BioluisPage,
    Tracks1Page,
    Resenas1Page,
    BrunoPage,
    SongsPage,
    BioBPage,
    ResenaBPage,
    MaroonPage,
    BioAdamPage,
    Tracks2Page,
    ShakiraPage,
    BioshakiraPage,
    ResenamaroonPage,
    Tracks3Page,
    ResenaparisPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LmPage,
    BioluisPage,
    Tracks1Page,
    Resenas1Page,
    BrunoPage,
    SongsPage,
    BioBPage,
    ResenaBPage,
    MaroonPage,
    BioAdamPage,
    Tracks2Page,
    ShakiraPage,
    BioshakiraPage,
    ResenamaroonPage,
    Tracks3Page,
    ResenaparisPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
