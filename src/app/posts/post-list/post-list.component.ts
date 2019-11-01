import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  // posts = [
  //   { title: 'Title 1', content: 'Content 1' },
  //   { title: 'Title 2', content: 'Content 2' },
  //   { title: 'Title 3', content: 'Content 3' }
  // ];

  posts = [];

  constructor() { }

  ngOnInit() {
  }

}
