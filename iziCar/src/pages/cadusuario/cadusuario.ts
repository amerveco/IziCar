import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { Usuario } from '../../model/Usuario/Usuario';
import { NgForm } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { ServicosPage } from '../servicos/servicos';
import { Form } from 'ionic-angular/util/form';

@IonicPage()
@Component({
  selector: 'page-cadusuario',
  templateUrl: 'cadusuario.html',
})
export class CadusuarioPage{

  usuario: Usuario = new Usuario();
  @ViewChild('form') form: NgForm;
  //form : any;
  /*{
    id: undefined,
    nome: '',
    email: '',
    senha: '',
    cpf: '',
    telefone: '',
    dataNasc: '',
    foto: ''
  };*/

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private authService: AuthProvider,
    private toastCtrl: ToastController) {
    
    }

  confirm(titulo: string, descricao: string){
      let alert = this.alertCtrl.create({
        title: ''+titulo,
        subTitle: ''+descricao,
        buttons: ['OK']
      });
      alert.present();
  }

  home() {
    this.navCtrl.push(HomePage, {
      val: 'trocatela'
    })
  }

  criarConta(){
    if(this.form.form.valid){
      let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom'});
      this.authService.createUser(this.usuario)
        .then((usuario: any) => {
          this.confirm('Bem vindo', 'Voce foi cadastrado com sucesso!');
          toast.setMessage('Usuario cadastrado com sucesso');
          //toast.present();
          this.load();
          console.log('inserido!');
        })
        .catch((error: any) => {
          if (error.code == 'auth/email-already-in-use') {
            this.confirm('Ops', 'E-mail já em uso!');
            toast.setMessage('E-mail já cadastrado!');
          } else if (error.code == 'auth/email-invalid') {
            this.confirm('Ops', 'E-mail invalido!');
            toast.setMessage('E-mail invalido!');
          } else if (error.code == 'auth/operation-not-allowed') {
            this.confirm('Ops', 'Operação não autoriazda!');
            toast.setMessage('Operação não autorizada!');
          } else if (error.code == 'auth/weak-password') {
            this.confirm('Ops', 'Senha muito fraca!');
            toast.setMessage('Senha muito fraca!');
          }
          //toast.present();
        });
    }
  }

  load(){
    this.navCtrl.push(ServicosPage, {
      val: 'trocatela'
    })
  }

}
