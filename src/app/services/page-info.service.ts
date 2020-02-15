import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pageInfo } from '../interfaces/page-info.interface';

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {

  info : pageInfo = {};
  loaded = false;

  constructor( private http : HttpClient ) { 

    this.http.get('assets/data/data-page.json')
        .subscribe( (resp: pageInfo)=>{

          this.loaded = true;
          this.info = resp; 
          console.log(resp.instagram);

        })

  }

}
