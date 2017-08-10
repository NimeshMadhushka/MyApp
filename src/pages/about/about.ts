import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpServiceProvider} from '../../providers/http-service/http-service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {

constructor(public navCtrl: NavController, public httpServiceProvider: HttpServiceProvider){
}  

ionViewLoad(){
  this.httpServiceProvider.getJsonData();
}

}
