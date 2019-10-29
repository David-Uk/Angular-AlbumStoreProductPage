import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  _albulmUrl = '../assets/album.json'

  constructor(private _http: Http) { }

  getAlbum(id: number) {
    return this._http.get(this._albulmUrl)
      .map(Response => Response.json)
  }

}