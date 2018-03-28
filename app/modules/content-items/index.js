// @flow
/* eslint-disable import/no-duplicates */

import * as actions from './actions';
import * as model from './model';
import * as selectors from './selectors';
import components from './components';
import reducer from './reducer';

import {
  contentItemTypes,
  symbolContentItemTypes,
  plainTextContentItemTypes,
  mediaContentItemTypes,
  taggableContentItemTypes,
  subableContentItemTypes,
  containerContentItemTypes,
  tagTypes,
  visibilityTypes,
} from './model';
import type {
  ContentItemType,
  SymbolContentItemType,
  PlainTextContentItemType,
  MediaContentItemType,
  TaggableContentItemType,
  SubableContentItemType,
  ContainerContentItemType,
  Metadata,
  Tag,
  Visibility,
  BaseContentItem,
  SymbolContentItem,
  PlainTextContentItem,
  MediaContentItem,
  TaggableContentItem,
  SubableContentItem,
  ContainerContentItem,
  RootContentItem,
  HeadingContentItem,
  ParagraphContentItem,
  ListContentItem,
  ListItemContentItem,
  BlockquoteContentItem,
  CodeContentItem,
  ImageContentItem,
  VideoContentItem,
  AudioContentItem,
  IframeContentItem,
  SlideBreakContentItem,
  CourseBreakContentItem,
  ContentItem,
  ContentItemsState,
} from './model';

const contentItems = {
  actions,
  components,
  model,
  reducer,
  selectors,
};

export {
  contentItemTypes,
  symbolContentItemTypes,
  plainTextContentItemTypes,
  mediaContentItemTypes,
  taggableContentItemTypes,
  subableContentItemTypes,
  containerContentItemTypes,
  tagTypes,
  visibilityTypes,
};
export type {
  ContentItemType,
  SymbolContentItemType,
  PlainTextContentItemType,
  MediaContentItemType,
  TaggableContentItemType,
  SubableContentItemType,
  ContainerContentItemType,
  Metadata,
  Tag,
  Visibility,
  BaseContentItem,
  SymbolContentItem,
  PlainTextContentItem,
  MediaContentItem,
  TaggableContentItem,
  SubableContentItem,
  ContainerContentItem,
  RootContentItem,
  HeadingContentItem,
  ParagraphContentItem,
  ListContentItem,
  ListItemContentItem,
  BlockquoteContentItem,
  CodeContentItem,
  ImageContentItem,
  VideoContentItem,
  AudioContentItem,
  IframeContentItem,
  SlideBreakContentItem,
  CourseBreakContentItem,
  ContentItem,
  ContentItemsState,
};
export default contentItems;
