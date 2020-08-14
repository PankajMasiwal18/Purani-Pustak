import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { BackEndService } from '../BackEnd/back-end.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private BackEndService : BackEndService,private router : Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (!this.BackEndService.isLoggedIn()) {
        this.router.navigateByUrl('/Login_Or_Register');
      ///  this.BackEndService.deleteToken();
        return false;
      }
    return true;
  }
  
}
