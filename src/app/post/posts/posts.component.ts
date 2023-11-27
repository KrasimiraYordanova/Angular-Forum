import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.loadPosts(5).subscribe((value) => {
      console.log(value);
    })
  }

}
