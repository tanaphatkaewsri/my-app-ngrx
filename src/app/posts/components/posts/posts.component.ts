import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as PostsActions from '../../store/actions';
import {
  errorSelector,
  isLoadingSelector,
  postsSelector,
} from '../../store/selectors';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { PostInterface } from '../../types/post.interface';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  posts$: Observable<PostInterface[]>;
  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.posts$ = this.store.pipe(select(postsSelector));
  }
  ngOnInit(): void {
    this.store.dispatch(PostsActions.getPosts());
  }
}
