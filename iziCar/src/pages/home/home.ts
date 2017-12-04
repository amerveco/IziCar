import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicosPage } from '../servicos/servicos';
import { CadusuarioPage } from '../cadusuario/cadusuario';
import { AlertController } from 'ionic-angular';
import { Usuario } from '../../model/Usuario/Usuario';
import { NgForm } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { Form } from 'ionic-angular/util/form';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuario: Usuario = new Usuario();
  @ViewChild('form') form: NgForm;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private authService: AuthProvider) {
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

  confirm(titulo: string, descricao: string){
    let alert = this.alertCtrl.create({
      title: ''+titulo,
      subTitle: ''+descricao,
      buttons: ['OK']
    });
    alert.present();
}

  singIn(){
    if(this.form.form.valid){
      this.authService.singIn(this.usuario)
        .then(() => {
          this.load();
        })
        .catch((error: any) => {
          if(error.code == 'auth/invalid-email') {
            this.confirm('Ops','E-mail invalido!');
          } else if(error.code == 'auth/user-disabled') {
            this.confirm('Ops','Usuario desativado!');
          } else if(error.code == 'auth/user-not-found') {
            this.confirm('Ops','Usuario incorreto!');
          } else if(error.code == 'auth/wrong-password') {
            this.confirm('Ops','Senha incorreta!');
          }
        });
    }
  }

}
