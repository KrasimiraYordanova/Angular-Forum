import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { IPost } from 'src/app/interfaces/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  postList: IPost[] | null = null;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.loadPosts(5).subscribe({
      next: (value) => {
        console.log(value);
        this.postList = value;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
