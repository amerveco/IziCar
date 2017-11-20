import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicosPage } from '../servicos/servicos';
import { CadusuarioPage } from '../cadusuario/cadusuario';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

    load(){
      this.navCtrl.push(ServicosPage, {
        val: 'trocatela'
      })
    }

    loadCadastro(){
      this.navCtrl.push(CadusuarioPage, {
        val: 'trocatela'
      })
    }
}
