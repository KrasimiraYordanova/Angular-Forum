import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';



@NgModule({
  declarations: [
    PostsComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PostsComponent,
    PostDetailComponent
  ]
})
export class PostModule { }
