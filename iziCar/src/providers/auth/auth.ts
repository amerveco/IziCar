import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthProvider {

  user: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth, private facebook: Facebook) {
    this.user = angularFireAuth.authState;
  }

  createUser(user: User) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  singInWithFacebook() {
    return this.facebook.login(['public_profile','email'])
      .then((res: FacebookLoginResponse) => {
        //this.angularFireAuth.auth.singInWithCredential(firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken));
      })
  }

}
