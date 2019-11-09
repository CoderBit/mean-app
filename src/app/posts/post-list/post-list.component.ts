import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  isLoading = false;
  totalPosts = 10;
  postsPerPage = 5;
  pageSizeOptions = [2, 5, 10];
  private postSub: Subscription;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.postService.getPosts();
    this.postSub = this.postService.getPostUpdate().subscribe( (post: Post[]) => {
      this.isLoading = false;
      this.posts = post;
    });
  }

  onChangedPage(pageData: PageEvent){

  }

  onDelete(postId: string){
    this.postService.deletePost(postId);
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }

}
