import { Component, OnInit } from '@angular/core';
import { AppUser } from './app-user';
import { AppUserAuth } from './app-user-auth';
import { SecurityService } from './security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: AppUser = new AppUser();
  securityObject: AppUserAuth | null = new AppUserAuth;
  constructor(private securityService: SecurityService,private router: Router) { 
   

      }

  ngOnInit(): void {
    
  }
  login() {
    this.securityService.login(this.user).subscribe(resp => {
        this.securityObject = resp;
        this.router.navigateByUrl('/books-list')
    });
}
}

