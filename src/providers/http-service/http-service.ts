import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class HttpServiceProvider {

  constructor(private http: Http) {
    console.log('Hello!');
  }

  getJsonData(){
    

   this.http.get('../../assets/data/technologies.json').map(res=>res.json()).subscribe(data=>{
    console.log(data);
   });
  }

}
