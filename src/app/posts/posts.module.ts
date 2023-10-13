import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostsComponent } from './components/posts/posts.component';
import { PostService } from './services/posts.service';
import { reducers } from './store/reducers';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('posts', reducers)],
  providers: [PostService],
  declarations: [PostsComponent],
  exports: [PostsComponent],
})
export class PostsModule {}
