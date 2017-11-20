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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ServicosPage,
    ParceirosPage,
    AgendamentosPage,
    CadusuarioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ServicosPage,
    ParceirosPage,
    AgendamentosPage,
    CadusuarioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
