import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PostsComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PostsComponent,
    PostDetailComponent
  ]
})
export class PostModule { }
