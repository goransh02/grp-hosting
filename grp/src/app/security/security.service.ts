import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { AppUserAuth } from './app-user-auth';
import { AppUser } from './app-user';
import { LOGIN_MOCKS } from './login-mocks';
@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  securityObject: AppUserAuth = new AppUserAuth();
resetSecurityObject(): void {
    this.securityObject.userName = "";
    this.securityObject.bearerToken = "";
    this.securityObject.isAuthenticated = false;
    this.securityObject.canAccessProducts = false;
    this.securityObject.canDeleteComplaint = false;
    this.securityObject.canSaveProduct = false;
    this.securityObject.canAccessCategories = false;
    this.securityObject.canAddCategory = false;
    localStorage.removeItem("bearerToken");
}
login(entity: AppUser): Observable<AppUserAuth> {
  this.resetSecurityObject();
  Object.assign(this.securityObject, LOGIN_MOCKS.find(user => user.userName.toLowerCase() === entity.userName.toLowerCase()));
  if (this.securityObject.userName !== "") {
    console.log("correct")
      localStorage.setItem("bearerToken", this.securityObject.bearerToken);
  }
  return of<AppUserAuth>(this.securityObject);

}

logout(): void {
  this.resetSecurityObject();
}
  constructor() { }
}
