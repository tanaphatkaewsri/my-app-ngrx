import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostsComponent } from './components/posts/posts.component';
import { PostService } from './services/posts.service';
import { reducers } from './store/reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './store/effect';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('posts', reducers),
    EffectsModule.forFeature([PostsEffects]),
  ],
  providers: [PostService],
  declarations: [PostsComponent],
  exports: [PostsComponent],
})
export class PostsModule {}
