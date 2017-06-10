import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  UserService } from '../services/index';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit  {

   model: any = {};
    loading = false;
    signupForm : FormGroup;

    ngOnInit(){
        this.signupForm = new FormGroup({
            'firstName': new FormControl(null, Validators.required),
            'lastName': new FormControl(null, Validators.required),
            'username': new FormControl(null, Validators.required),
            'password': new FormControl(null, Validators.required)
        })
    }

    onSubmit(){
        console.log(this.signupForm);
    }

    constructor(
        private router: Router,
        private userService: UserService,
        ) { }

    register() {
        console.log(this.signupForm.value);
        this.loading = true;
        this.userService.create(this.signupForm.value)
            .subscribe(
                data => {
                    
                    this.router.navigate(['/login']);
                },
                error => {
                    
                    this.loading = false;
                });
    }

}
