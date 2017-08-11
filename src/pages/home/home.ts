import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetailsPage } from '../details/details';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { ProfilePage } from '../profile/profile';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
goToProfilePage(){

    this.navCtrl.push(ProfilePage);
}

  goToDetailsPage(){

    this.navCtrl.push(DetailsPage);
}

login(){
  
    this.navCtrl.push(LoginPage);

  }
  signup(){
    this.navCtrl.push(SignupPage);
  }


}