import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  responseData : any;
  userData = {"username": "", "password": ""};

  constructor(public navCtrl: NavController,) {
    

  }

goToHomePage(){

    this.navCtrl.push(TabsPage);

    //this.authService.postData(this.userData,'goToHomePage').then((result) => {
    //  this.responseData = result;
    //  console.log(this.responseData);
     // localStorage.setItem('userData', JSON.stringify(this.responseData));
     // this.navCtrl.push(HomePage);
   // }, (err) => {
       //Error log
    //});


}
goToSignupPage(){
  this.navCtrl.push(SignupPage);

}



}
