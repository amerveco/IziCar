import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhaParceirosPage } from './detalha-parceiros';

@NgModule({
  declarations: [
    DetalhaParceirosPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhaParceirosPage),
  ],
})
export class DetalhaParceirosPageModule {}
