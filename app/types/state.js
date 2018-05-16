// @flow

import type { TopicsState } from 'modules/topics';
import type { ContentItemsState } from 'modules/content-items';
import type { FeedState } from 'modules/feed';
import type { UsersState } from 'modules/users';
import type { AuthState } from 'modules/authentication';
import type { SlideStylingState } from 'modules/slide-styling';
import type { ApiState } from 'modules/api';

export type ErrorState = {

};

export type State = {
  +modules: {
    +topics: TopicsState,
    +feed: FeedState,
    +contentItems: ContentItemsState,
    +users: UsersState,
    +authentication: AuthState,
    +slideStyling: SlideStylingState,
    +api: ApiState,
  },
  +form: {},
  +error: {},
};
