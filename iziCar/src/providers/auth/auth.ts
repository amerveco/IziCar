import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { AngularFireAuth } from 'angularfire2/auth';
import { Usuario } from '../../model/Usuario/Usuario';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthProvider {

  user: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth, private facebook: Facebook) {
    this.user = angularFireAuth.authState;
  }

  createUser(user: Usuario) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.senha);
  }

  singIn(user: Usuario){
    return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.senha);
  }

  singInWithFacebook() {
    return this.facebook.login(['public_profile','email'])
      .then((res: FacebookLoginResponse) => {
        //this.angularFireAuth.auth.singInWithCredential(firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken));
      })
  }

}
