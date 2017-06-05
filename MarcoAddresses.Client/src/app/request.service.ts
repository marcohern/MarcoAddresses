import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {environment} from '../environments/environment';

export enum Method {
  None = 0,
  Get = 1,
  Post,
  Query,
  Create,
  Update,
  Delete
}

@Injectable()
export class RequestService {
  private calling:boolean = false;

  constructor(
    private http: Http
  ) {
  }

  getPrefix(): string { return environment.request.prefix; }

  getPostfix(method: Method): string {
    switch (method) {
      case Method.Get: return environment.request.postfix.get;
      case Method.Post: return environment.request.postfix.post;
      case Method.Query: return environment.request.postfix.query;
      case Method.Create: return environment.request.postfix.create;
      case Method.Update: return environment.request.postfix.update;
      case Method.Delete: return environment.request.postfix.delete;
      default: return '';
    }
  }

  mapUrl(uri: string, method: Method= Method.None, id?: number, query?: Map<string, any>) {
    let url = uri;
    let qr = '';
    if (!environment.request.mock && id) url += '/' + id;
    if (query) {
      query.forEach((value: any, key: string) => {
        qr += (qr == '') ? '?' : '&';
        qr += key + '=' + encodeURI(value);
      });
    }
    return environment.request.prefix + url + this.getPostfix(method) + qr;
  }

  private buildHeaders(): Headers {
    const headers: Headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  private _get(url: string, loadscreen: boolean = true): Observable<any> {
    if (loadscreen) this.calling = true;
    return this.http
      .get(url, { headers: this.buildHeaders() })
      .do(data => this.do(data))
      .catch(error => this.handleError(error));
  }

  private _post(url: string, body: any, loadscreen: boolean = true): Observable<any> {
    if (loadscreen) this.calling = true;
    return this.http
      .post(url, body, { headers: this.buildHeaders() })
      .do(data => this.do(data))
      .catch(error => this.handleError(error));
  }

  private _put(url: string, body: any, loadscreen: boolean = true): Observable<any> {
    if (loadscreen) this.calling = true;
    return this.http
      .put(url, body, { headers: this.buildHeaders() })
      .do(data => this.do(data))
      .catch(error => this.handleError(error));
  }

  private _delete(url: string, loadscreen: boolean = true): Observable<any> {
    if (loadscreen) this.calling = true;
    return this.http
      .delete(url, { headers: this.buildHeaders() })
      .do(data => this.do(data))
      .catch(error => this.handleError(error));
  }public get(uri: string, id: number, loadscreen: boolean = true): Observable<any> {
    const url = this.mapUrl(uri, Method.Get, id, new Map<string, any>());
    return this._get(url, loadscreen);
  }

  public post(uri: string, body: any, loadscreen: boolean = true): Observable<any> {
    const url = this.mapUrl(uri, Method.Post, null, new Map<string, any>());
    if (environment.request.mock)
      return this._get(url, loadscreen);
    return this._post(url, body, loadscreen);
  }

  public query(uri: string, q: string= '', loadscreen: boolean = true): Observable<any> {
    const url = this.mapUrl(uri, Method.Query, null, new Map<string, any>([
      ['q', [q]]
    ]));
    return this._get(url, loadscreen);
  }

  public filter(uri:string, filters:any, loadscreen:boolean=true): Observable<any> {
    let m:Map<string,any> = new Map<string, any>();
    for (let key in filters) {
      if (filters[key])
        m.set(key,filters[key]);
    }
    const url = this.mapUrl(uri, Method.Query, null, m);
    return this._get(url, loadscreen);
  }

  public create(uri: string, body: any, loadscreen: boolean = true): Observable<any> {
    const url = this.mapUrl(uri, Method.Create, null, new Map<string, any>());
    if (environment.request.mock)
      return this._get(url, loadscreen);
    return this._post(url, body, loadscreen);
  }

  public update(uri: string, body: any, id: number, loadscreen: boolean = true): Observable<any> {
    const url = this.mapUrl(uri, Method.Update, id, new Map<string, any>());
    if (environment.request.mock)
      return this._get(url, loadscreen);
    return this._put(url, body, loadscreen);
  }

  public delete(uri: string, id: number, loadscreen: boolean = true): Observable<any> {
    const url = this.mapUrl(uri, Method.Delete, id, new Map<string, any>());
    if (environment.request.mock)
      return this._get(url, loadscreen);
    return this._delete(url, loadscreen);
  }

  public save(uri: string, body: any, loadscreen: boolean = true): Observable<any> {
    if (body.Id) {
      return this.update(uri, body, body.Id, loadscreen);
    } else {
      return this.create(uri, body, loadscreen);
    }
  }

  private handleError(error: Response) {
    this.calling = false;
    return Observable.throw(error.json().error || 'Server error');
  }

  private do(data) {
    this.calling = false;
  }

  public isCalling(): boolean { return this.calling; }
}
