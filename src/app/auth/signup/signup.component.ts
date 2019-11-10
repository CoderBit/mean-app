import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpComponent implements OnInit {

  isLoading = false;

  constructor() { }

  ngOnInit() {
  }

  onSignup(form: NgForm){
    if(form.invalid){
      return;
    }

    
  }
}
