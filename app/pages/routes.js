// @flow
/**
 * Defines routes for the various pages of the app.
 * Note: pages & other components can define their own sub-routes, which are not included here.
 *
 * Docs: https://reacttraining.com/react-router/web/guides/basic-components
 */

import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFoundPage from './components/NotFoundPage';
import HomePage from './components/HomePage';
import LibraryPage from './components/LibraryPage';
import TopicsPage from './components/TopicsPage';
import EditorPage from './components/EditorPage';
import NewTopicPage from './components/NewTopicPage';
import ProfilePage from './components/ProfilePage';

const routes = (
  <Switch>
    <Route path="/" exact={true} component={HomePage} />
    <Route path="/library" component={LibraryPage} />
    <Route path="/editor" component={EditorPage} />
    <Route path="/topics" exact={true} component={TopicsPage} />
    <Route path="/topics/new" component={NewTopicPage} />
    <Route path="/profile" component={ProfilePage} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default routes;
