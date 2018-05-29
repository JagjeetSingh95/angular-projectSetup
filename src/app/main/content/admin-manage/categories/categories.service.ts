import { Injectable }   from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpModule, Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Element } from './element';
@Injectable()
export class CategoriesService {
  
  constructor(private http: HttpClient) { }
  
  getUser(): Observable<Element[]> {
    return this.http.get<Element[]>('/assets/data/cat.json');
  }

   create(user: Element) {
        return this.http.post('/assets/data/cat.json', user);
    }
  
}