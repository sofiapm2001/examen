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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LmPage,
    BioluisPage,
    Tracks1Page,
    Resenas1Page,
    BrunoPage
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
    BrunoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
