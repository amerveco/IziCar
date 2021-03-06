import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ParceirosPage } from '../parceiros/parceiros';


@IonicPage()
@Component({
  selector: 'page-servicos',
  templateUrl: 'servicos.html',
})
export class ServicosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    console.log(navParams.get('val'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicosPage');
  }

  load(){
    this.navCtrl.push(ParceirosPage, {
      val: 'trocatela'
    })
  }

}
