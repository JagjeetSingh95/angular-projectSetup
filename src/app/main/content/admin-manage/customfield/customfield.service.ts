import { Injectable }   from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpModule, Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Element } from './element';
@Injectable()
export class CustomfieldService {
  
  constructor(private http: HttpClient) { }
  
  getUser(): Observable<Element[]> {
    return this.http.get<Element[]>('/assets/data/db.json');
  }

  create(id: string, name: string, group: string, label: string, alias: string) {
    console.log(id+""+name+""+group+""+label+""+alias);
     return this.http.post('/assets/data/db.json', JSON.stringify({id:id,name:name,group:group,label:label,alias:alias}));
}
  
}