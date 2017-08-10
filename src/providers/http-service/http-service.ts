import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class HttpServiceProvider {
  private url: string= "http://lacalhost:technologies/"

  constructor(private http: Http) {
    console.log('Hello HttpServiceProvider Provider');
  }

  getJsonData(){

    this.http.get(this.url)
    .do((res: Responce) => console.log(res));
  }

}
