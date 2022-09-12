import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppUserAuth } from 'src/app/security/app-user-auth';
import { SecurityService } from './security/security.service';
import { CrudService } from './service/crud.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  securityObject: AppUserAuth = {
    userName: '',
    bearerToken: '',
    isAuthenticated: false,
    canAccessProducts: false,
    canDeleteComplaint: false,
    canSaveProduct: false,
    canAccessCategories: false,
    canAddCategory: false
  };
  title = 'Complaint-Portal';
  refresh(): void {
    window.location.reload();
}
constructor(private crudService: CrudService, private router: Router, private securityService: SecurityService) { 
  this.securityObject = securityService.securityObject;
}
}
