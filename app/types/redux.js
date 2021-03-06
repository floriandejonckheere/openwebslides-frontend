// @flow

/* eslint-disable import/no-internal-modules */

// Alerts module
import { type AlertsAction } from 'modules/alerts/actionTypes';
import { type AlertsState } from 'modules/alerts/model';
// AsyncRequests module
import { type AsyncRequestsAction } from 'modules/asyncRequests/actionTypes';
import { type AsyncRequestsState } from 'modules/asyncRequests/model';
// ContentItems module
import { type ContentItemsAction } from 'modules/contentItems/actionTypes';
import { type ContentItemsState } from 'modules/contentItems/model';
// Errors module
import { type ErrorsAction } from 'modules/errors/actionTypes';
import { type ErrorsState } from 'modules/errors/model';
// FeedItems module
import { type FeedItemsAction } from 'modules/feedItems/actionTypes';
import { type FeedItemsState } from 'modules/feedItems/model';
// Platform module
import { type PlatformAction } from 'modules/platform/actionTypes';
import { type PlatformState } from 'modules/platform/model';
// PullRequests module
import { type PullRequestsAction } from 'modules/pullRequests/actionTypes';
import { type PullRequestsState } from 'modules/pullRequests/model';
// Topics module
import { type TopicsAction } from 'modules/topics/actionTypes';
import { type TopicsState } from 'modules/topics/model';
// Users module
import { type UsersAction } from 'modules/users/actionTypes';
import { type UsersState } from 'modules/users/model';

export type ModulesAction =
  | AlertsAction
  | AsyncRequestsAction
  | ContentItemsAction
  | ErrorsAction
  | FeedItemsAction
  | PlatformAction
  | PullRequestsAction
  | TopicsAction
  | UsersAction;

export type ModulesState = {|
  +alerts: AlertsState,
  +asyncRequests: AsyncRequestsState,
  +contentItems: ContentItemsState,
  +errors: ErrorsState,
  +feedItems: FeedItemsState,
  +platform: PlatformState,
  +pullRequests: PullRequestsState,
  +topics: TopicsState,
  +users: UsersState,
|};

export type AppState = {|
  +flash: {},
  +modules: ModulesState,
  +router: {},
|};
