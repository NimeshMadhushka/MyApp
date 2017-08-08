import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  responseData : any;
  userData = {"id": "","name": "", "Password": ""};


  constructor(public navCtrl: NavController,  ) {
    

  }

goHomePage(){

  this.navCtrl.push(TabsPage);

    //this.authService.postData(this.userData,'signup').then((result) => {
     // this.responseData = result;
     // console.log(this.responseData);
     // localStorage.setItem('userData', JSON.stringify(this.responseData));
     ////// this.navCtrl.push(HomePage);
   // }, (err) => {
      // Error log
    //});

}
goToLoginPage(){
  this.navCtrl.push(LoginPage);

}



}