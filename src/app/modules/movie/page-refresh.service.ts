import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PageRefresherService {

  constructor() { }

  public attach(router:Router) : void {
    router.routeReuseStrategy.shouldReuseRoute = () => false;

    router.events.subscribe((e)=>{
     if(e instanceof NavigationEnd){
       router.navigated = false;
     }
    });
  }
}
