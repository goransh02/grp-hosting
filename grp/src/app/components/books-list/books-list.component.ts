import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppUserAuth } from 'src/app/security/app-user-auth';
import { SecurityService } from '../../security/security.service';
import { CrudService } from './../../service/crud.service';
 
@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
 
export class BooksListComponent implements OnInit {
   
  Books:any = [];
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

  constructor(private crudService: CrudService, private router: Router, private securityService: SecurityService) { 
    this.securityObject = securityService.securityObject;
  }
 
  ngOnInit(): void {
    
    this.crudService.GetBooks().subscribe(res => {
      console.log(res)
      this.Books =res;
      console.log(this.Books)
    });    
  }
  
 
  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteBook(id).subscribe((res) => {
        this.Books.splice(i, 1);
      })
    }
    
  }
 

}