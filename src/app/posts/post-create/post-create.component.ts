import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {

  enteredTitle = '';
  enteredContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddPost(){
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
  }

}
