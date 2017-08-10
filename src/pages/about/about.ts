import { Component } from '@angular/core';
import { Events } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import {HttpServiceProvider} from '../../providers/http-service/http-service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {

constructor(private httpServiceProvider: HttpServiceProvider) {
  this.getJsonData();
}  
getJsonData(){
  this.httpServiceProvider.getJsonData().subscribe(data =>console.log(data));
}

}