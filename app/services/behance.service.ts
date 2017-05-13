import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class BehanceService {

  private username: string = 'elbernate038';
  private api_key: string = 'P5roE9RcUJBWV4NPlXvkOl1CDMyk8kih';
  public project_id: any;

  constructor( private _jsonp: Jsonp) { }

  getProjects(){
    return this._jsonp.get('http://www.behance.net/v2/users/' 
    + this.username + '/projects?api_key=' + this.api_key + '&callback=JSONP_CALLBACK')
      .map( res => res.json());
  }

    getProject(){
    return this._jsonp.get('http://www.behance.net/v2/projects/' 
    + this.project_id + '?api_key=' + this.api_key + '&callback=JSONP_CALLBACK')
      .map( res => res.json());
  }
}
