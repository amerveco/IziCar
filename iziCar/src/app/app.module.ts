import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ServicosPage } from '../pages/servicos/servicos';
import { ParceirosPage } from '../pages/parceiros/parceiros';
import { AgendamentosPage } from '../pages/agendamentos/agendamentos';
import { CadusuarioPage } from '../pages/cadusuario/cadusuario';
import { DetalhaParceirosPage } from '../pages/detalha-parceiros/detalha-parceiros';

import { Facebook } from '@ionic-native/facebook';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Component } from '@angular/core';

const  firebaseConfig = {
  apiKey: "AIzaSyBkxFyPNdbVBEH0ifV-gFrG05V_88F77oQ",
  authDomain: "izicar-1511866994850.firebaseapp.com",
  databaseURL: "https://izicar-1511866994850.firebaseio.com",
  projectId: "izicar-1511866994850",
  storageBucket: "izicar-1511866994850.appspot.com",
  messagingSenderId: "821534118972"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ServicosPage,
    ParceirosPage,
    AgendamentosPage,
    CadusuarioPage,
    DetalhaParceirosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ServicosPage,
    ParceirosPage,
    AgendamentosPage,
    CadusuarioPage,
    DetalhaParceirosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook,
    AuthProvider
  ]
})
export class AppModule {}
