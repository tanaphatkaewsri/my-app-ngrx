import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as PostsActions from '../store/actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { PostService } from '../services/posts.service';

@Injectable()
export class PostsEffects {
  getPosts$ = createEffect(() =>
    this.actionsEff$.pipe(
      ofType(PostsActions.getPosts),
      mergeMap(() => {
        return this.postsService.getPosts().pipe(
          map((posts) => PostsActions.getPostsSuccess({ posts })),
          catchError((error) =>
            of(PostsActions.getPostsFailure({ error: error.message }))
          )
        );
      })
    )
  );

  constructor(
    private actionsEff$: Actions,
    private postsService: PostService
  ) {}
}
