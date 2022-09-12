import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
 
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
 
export class AddBookComponent implements OnInit {
  bookForm: FormGroup;
   
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService,
    fb: FormBuilder
  ) { 
    this.bookForm = this.formBuilder.group({
      name: [''],
      price: [''],
      description: ['']
    })
    
  }
 
  ngOnInit() { }
 
  onSubmit(): any {
    this.crudService.AddBook(this.bookForm.value)
    .subscribe(() => {
        console.log(this.bookForm.value)
        this.ngZone.run(() => this.router.navigateByUrl('/books-list'))
      }, (err) => {
        console.log(err);
    });
  }
 
}