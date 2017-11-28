import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgendamentosPage } from '../agendamentos/agendamentos';
import { DetalhaParceirosPage } from '../detalha-parceiros/detalha-parceiros';

@IonicPage()
@Component({
  selector: 'page-parceiros',
  templateUrl: 'parceiros.html',
})
export class ParceirosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
        console.log(navParams.get('val'));
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParceirosPage');
  }

  load(){
    this.navCtrl.push(AgendamentosPage, {
      val: 'trocatela'
    })
  }

  detail() {
    this.navCtrl.push(DetalhaParceirosPage, {
      val: 'trocatela'
    })
  }
  
}
