// @flow

import * as a from './actionTypes';
import type { Event, FeedState } from './model';

const initialState: FeedState = {};

const setEvents = (state: FeedState, action: a.SetEventsAction): FeedState => {
  const newEvents = {};

  if (action.payload.items) {
    action.payload.items.forEach((item: Event): void => {
      newEvents[item.id] = item;
    });
  }

  return newEvents;
};

const reducer = (state: FeedState = initialState, action: a.FeedAction): FeedState => {
  switch (action.type) {
    case a.SET_EVENTS:
      return setEvents(state, action);
    default:
      // Make sure a flow type error is thrown when not all action.type cases are handled
      (action: empty);
      return state;
  }
};

export default reducer;
