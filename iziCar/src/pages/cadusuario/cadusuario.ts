import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cadusuario',
  templateUrl: 'cadusuario.html',
})
export class CadusuarioPage{

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    
        console.log(navParams.get('val'));
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadusuarioPage');
  }

  confirm(){

      let alert = this.alertCtrl.create({
        title: 'Bem vindo',
        subTitle: 'Voce está cadastrado no IziCar, parabens!',
        buttons: ['OK']
      });
      alert.present();
      this.home();
  }

  home() {
    this.navCtrl.push(HomePage, {
      val: 'trocatela'
    })
  }

}
