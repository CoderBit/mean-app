import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  // posts = [
  //   { title: 'Title 1', content: 'Content 1' },
  //   { title: 'Title 2', content: 'Content 2' },
  //   { title: 'Title 3', content: 'Content 3' }
  // ];

  posts: Post[] = [];
  private postSub: Subscription;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.postSub = this.postService.getPostUpdate().subscribe( (post: Post[]) => {
      this.posts = post;
    });
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }

}
