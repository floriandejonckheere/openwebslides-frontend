// @flow
/* eslint-disable no-multiple-empty-lines */

import type { Identifier } from 'types/model';

import * as types from './contentItemTypes';
import * as metadata from './metadata';


// BASE --------------------------------------------------------------------------------------------

// Base type for contentItems.
export type BaseContentItem = {
  // Unique identifier for the contentItem.
  +id: Identifier,
  // Type of the contentItem.
  +type: types.ContentItemType,
  // TRUE if the contentItem is currently being edited, FALSE if not.
  // Has consequences for validation - e.g. empty text is ok while editing, but not otherwise.
  +isEditing: boolean,
};

// List of 'base' contentItem props that can be edited through propsForType.
export const editablePropsForBaseContentItem = [
  // Placeholder
];


// SYMBOL ------------------------------------------------------------------------------------------

// Additional props for 'symbol' contentItems.
export type SymbolContentItem = {
  ...$Exact<BaseContentItem>,
  // Limit contentItem type to symbolContentItemTypes.
  +type: types.SymbolContentItemType,
};

// List of 'symbol' contentItem props that can be edited through propsForType.
export const editablePropsForSymbolContentItem = [
  ...editablePropsForBaseContentItem,
];


// PLAINTEXT ---------------------------------------------------------------------------------------

// Additonal props for 'plainText' contentItems.
export type PlainTextContentItem = {
  ...$Exact<BaseContentItem>,
  // Limit contentItem type to plainTextContentItemTypes.
  +type: types.PlainTextContentItemType,
  // The text content of the contentItem.
  // May contain markdown to create emphasized / linked elements.
  +text: string,
};

// List of 'plainText' contentItem props that can be edited through propsForType.
export const editablePropsForPlainTextContentItem = [
  ...editablePropsForBaseContentItem,
  'text',
];


// MEDIA -------------------------------------------------------------------------------------------

// Additional props for 'media' contentItems.
export type MediaContentItem = {
  ...$Exact<BaseContentItem>,
  // Limit contentItem type to mediaContentItemTypes.
  +type: types.MediaContentItemType,
  // The source url of the media.
  +src: string,
  // The alt text in case the media doesn't load.
  +alt: string,
  // The caption for the media.
  +caption: ?string,
};

// List of 'media' contentItem props that can be edited through propsForType.
export const editablePropsForMediaContentItem = [
  ...editablePropsForBaseContentItem,
];


// TAGGABLE ----------------------------------------------------------------------------------------

// Additional props for 'taggable' contentItems.
export type TaggableContentItem = {
  ...$Exact<BaseContentItem>,
  // Limit contentItem type to taggableContentItemTypes.
  +type: types.TaggableContentItemType,
  // ContentItem metadata.
  +metadata: metadata.Metadata,
};

// List of 'taggable' contentItem props that can be edited through propsForType.
export const editablePropsForTaggableContentItem = [
  ...editablePropsForBaseContentItem,
];


// SUBABLE -----------------------------------------------------------------------------------------

// Additional props for 'subable' contentItems.
export type SubableContentItem = {
  ...$Exact<BaseContentItem>,
  // Limit contentItem type to subableContentItemTypes.
  +type: types.SubableContentItemType,
  // Ids of contentItems directly nested under this contentItem.
  +subItemIds: Array<Identifier>,
};

// Additional props for denormalized 'subable' contentItems.
export type DenormalizedSubableContentItem = {
  ...$Exact<BaseContentItem>,
  // Limit contentItem type to subableContentItemTypes.
  +type: types.SubableContentItemType,
  // ContentItems directly nested under this contentItem.
  // eslint-disable-next-line no-use-before-define
  +subItems: Array<DenormalizedContentItem>,
};

// List of 'subable' contentItem props that can be edited through propsForType.
export const editablePropsForSubableContentItem = [
  ...editablePropsForBaseContentItem,
];


// CONTAINER ---------------------------------------------------------------------------------------

// Additional props for 'container' contentItems.
export type ContainerContentItem = {
  ...$Exact<BaseContentItem>,
  // Limit contentItem type to containerContentItemTypes.
  +type: types.ContainerContentItemType,
  // Ids of contentItems that are direct children of this container.
  +childItemIds: Array<Identifier>,
};

// Additional props for denormalized 'container' contentItems.
export type DenormalizedContainerContentItem = {
  ...$Exact<BaseContentItem>,
  // Limit contentItem type to containerContentItemTypes.
  +type: types.ContainerContentItemType,
  // ContentItems that are direct children of this container.
  // eslint-disable-next-line no-use-before-define
  +childItems: Array<DenormalizedContentItem>,
};

// List of 'container' contentItem props that can be edited through propsForType.
export const editablePropsForContainerContentItem = [
  ...editablePropsForBaseContentItem,
];


// ROOT --------------------------------------------------------------------------------------------

// Additional props for ROOT contentItems.
export type RootContentItemProps = {
  // Limit contentItem type to ROOT.
  +type: typeof types.contentItemTypes.ROOT,
  // Custom ROOT props go here.
};

// Type for a ROOT contentItem.
export type RootContentItem = {
  ...$Exact<SymbolContentItem>,
  ...$Exact<ContainerContentItem>,
  ...$Exact<RootContentItemProps>,
};

// Type for a denormalized ROOT contentItem.
export type DenormalizedRootContentItem = {
  ...$Exact<SymbolContentItem>,
  ...$Exact<DenormalizedContainerContentItem>,
  ...$Exact<RootContentItemProps>,
};

// List of ROOT contentItem props that can be edited through propsForType.
export const editablePropsForRootContentItem = [
  ...editablePropsForSymbolContentItem,
  ...editablePropsForContainerContentItem,
];


// HEADING -----------------------------------------------------------------------------------------

// Additional props for HEADING contentItems.
export type HeadingContentItemProps = {
  // Limit contentItem type to HEADING.
  +type: typeof types.contentItemTypes.HEADING,
  // Custom HEADING props go here.
};

// Type for a HEADING contentItem.
export type HeadingContentItem = {
  ...$Exact<PlainTextContentItem>,
  ...$Exact<TaggableContentItem>,
  ...$Exact<SubableContentItem>,
  ...$Exact<HeadingContentItemProps>,
};

// Type for a denormalized HEADING contentItem.
export type DenormalizedHeadingContentItem = {
  ...$Exact<PlainTextContentItem>,
  ...$Exact<TaggableContentItem>,
  ...$Exact<DenormalizedSubableContentItem>,
  ...$Exact<HeadingContentItemProps>,
};

// List of HEADING contentItem props that can be edited through propsForType.
export const editablePropsForHeadingContentItem = [
  ...editablePropsForPlainTextContentItem,
  ...editablePropsForTaggableContentItem,
  ...editablePropsForSubableContentItem,
];


// PARAGRAPH ---------------------------------------------------------------------------------------

// Additional props for PARAGRAPH contentItems.
export type ParagraphContentItemProps = {
  // Limit contentItem type to PARAGRAPH.
  +type: typeof types.contentItemTypes.PARAGRAPH,
  // Custom PARAGRAPH props go here.
};

// Type for a PARAGRAPH contentItem.
export type ParagraphContentItem = {
  ...$Exact<PlainTextContentItem>,
  ...$Exact<TaggableContentItem>,
  ...$Exact<SubableContentItem>,
  ...$Exact<ParagraphContentItemProps>,
};

// Type for a denormalized PARAGRAPH contentItem.
export type DenormalizedParagraphContentItem = {
  ...$Exact<PlainTextContentItem>,
  ...$Exact<TaggableContentItem>,
  ...$Exact<DenormalizedSubableContentItem>,
  ...$Exact<ParagraphContentItemProps>,
};

// List of PARAGRAPH contentItem props that can be edited through propsForType.
export const editablePropsForParagraphContentItem = [
  ...editablePropsForPlainTextContentItem,
  ...editablePropsForTaggableContentItem,
  ...editablePropsForSubableContentItem,
];


// LIST --------------------------------------------------------------------------------------------

// Additional props for LIST contentItems.
export type ListContentItemProps = {
  // Limit contentItem type to LIST.
  +type: typeof types.contentItemTypes.LIST,
  // TRUE if the list contains ordered items, FALSE if not.
  +ordered: boolean,
};

// Type for a LIST contentItem.
export type ListContentItem = {
  ...$Exact<ContainerContentItem>,
  ...$Exact<TaggableContentItem>,
  ...$Exact<SubableContentItem>,
  ...$Exact<ListContentItemProps>,
};

// Type for a denormalized LIST contentItem.
export type DenormalizedListContentItem = {
  ...$Exact<DenormalizedContainerContentItem>,
  ...$Exact<TaggableContentItem>,
  ...$Exact<DenormalizedSubableContentItem>,
  ...$Exact<ListContentItemProps>,
};

// List of LIST contentItem props that can be edited through propsForType.
export const editablePropsForListContentItem = [
  ...editablePropsForContainerContentItem,
  ...editablePropsForTaggableContentItem,
  ...editablePropsForSubableContentItem,
];


// LIST_ITEM ---------------------------------------------------------------------------------------

// Additional props for LIST_ITEM contentItems.
export type ListItemContentItemProps = {
  // Limit contentItem type to LIST_ITEM.
  +type: typeof types.contentItemTypes.LIST_ITEM,
  // Custom LIST_ITEM props go here.
};

// Type for a LIST_ITEM contentItem.
export type ListItemContentItem = {
  ...$Exact<PlainTextContentItem>,
  ...$Exact<TaggableContentItem>,
  ...$Exact<ListItemContentItemProps>,
};

// Type for a denormalized LIST_ITEM contentItem.
export type DenormalizedListItemContentItem = {
  ...$Exact<PlainTextContentItem>,
  ...$Exact<TaggableContentItem>,
  ...$Exact<ListItemContentItemProps>,
};

// List of LIST_ITEM contentItem props that can be edited through propsForType.
export const editablePropsForListItemContentItem = [
  ...editablePropsForPlainTextContentItem,
  ...editablePropsForTaggableContentItem,
];


// BLOCKQUOTE --------------------------------------------------------------------------------------

// Additional props for BLOCKQUOTE contentItems.
export type BlockquoteContentItemProps = {
  // Limit contentItem type to BLOCKQUOTE.
  +type: typeof types.contentItemTypes.BLOCKQUOTE,
  // The person / organisation / etc. that is the source of the quote.
  +cite: string,
  // The url to the source of the quote.
  +href: ?string,
};

// Type for a BLOCKQUOTE contentItem.
export type BlockquoteContentItem = {
  ...$Exact<PlainTextContentItem>,
  ...$Exact<TaggableContentItem>,
  ...$Exact<SubableContentItem>,
  ...$Exact<BlockquoteContentItemProps>,
};

// Type for a denormalized BLOCKQUOTE contentItem.
export type DenormalizedBlockquoteContentItem = {
  ...$Exact<PlainTextContentItem>,
  ...$Exact<TaggableContentItem>,
  ...$Exact<DenormalizedSubableContentItem>,
  ...$Exact<BlockquoteContentItemProps>,
};

// List of BLOCKQUOTE contentItem props that can be edited through propsForType.
export const editablePropsForBlockquoteContentItem = [
  ...editablePropsForPlainTextContentItem,
  ...editablePropsForTaggableContentItem,
  ...editablePropsForSubableContentItem,
];


// CODE --------------------------------------------------------------------------------------------

// Additional props for CODE contentItems.
export type CodeContentItemProps = {
  // Limit contentItem type to CODE.
  +type: typeof types.contentItemTypes.CODE,
  // The language (e.g. JavaScript, JSON, ...) that the code is written in.
  +language: string,
};

// Type for a CODE contentItem.
export type CodeContentItem = {
  ...$Exact<PlainTextContentItem>,
  ...$Exact<TaggableContentItem>,
  ...$Exact<SubableContentItem>,
  ...$Exact<CodeContentItemProps>,
};

// Type for a denormalized CODE contentItem.
export type DenormalizedCodeContentItem = {
  ...$Exact<PlainTextContentItem>,
  ...$Exact<TaggableContentItem>,
  ...$Exact<DenormalizedSubableContentItem>,
  ...$Exact<CodeContentItemProps>,
};

// List of CODE contentItem props that can be edited through propsForType.
export const editablePropsForCodeContentItem = [
  ...editablePropsForPlainTextContentItem,
  ...editablePropsForTaggableContentItem,
  ...editablePropsForSubableContentItem,
];


// IMAGE -------------------------------------------------------------------------------------------

// Additional props for IMAGE contentItems.
export type ImageContentItemProps = {
  // Limit contentItem type to IMAGE.
  +type: typeof types.contentItemTypes.IMAGE,
  // Custom IMAGE props go here.
};

// Type for an IMAGE contentItem.
export type ImageContentItem = {
  ...$Exact<MediaContentItem>,
  ...$Exact<TaggableContentItem>,
  ...$Exact<SubableContentItem>,
  ...$Exact<ImageContentItemProps>,
};

// Type for a denormalized IMAGE contentItem.
export type DenormalizedImageContentItem = {
  ...$Exact<MediaContentItem>,
  ...$Exact<TaggableContentItem>,
  ...$Exact<DenormalizedSubableContentItem>,
  ...$Exact<ImageContentItemProps>,
};

// List of IMAGE contentItem props that can be edited through propsForType.
export const editablePropsForImageContentItem = [
  ...editablePropsForMediaContentItem,
  ...editablePropsForTaggableContentItem,
  ...editablePropsForSubableContentItem,
];


// VIDEO -------------------------------------------------------------------------------------------

// Additional props for VIDEO contentItems.
export type VideoContentItemProps = {
  // Limit contentItem type to VIDEO.
  +type: typeof types.contentItemTypes.VIDEO,
  // Custom VIDEO props go here.
};

// Type for a VIDEO contentItem.
export type VideoContentItem = {
  ...$Exact<MediaContentItem>,
  ...$Exact<TaggableContentItem>,
  ...$Exact<SubableContentItem>,
  ...$Exact<VideoContentItemProps>,
};

// Type for a denormalized VIDEO contentItem.
export type DenormalizedVideoContentItem = {
  ...$Exact<MediaContentItem>,
  ...$Exact<TaggableContentItem>,
  ...$Exact<DenormalizedSubableContentItem>,
  ...$Exact<VideoContentItemProps>,
};

// List of VIDEO contentItem props that can be edited through propsForType.
export const editablePropsForVideoContentItem = [
  ...editablePropsForMediaContentItem,
  ...editablePropsForTaggableContentItem,
  ...editablePropsForSubableContentItem,
];


// AUDIO -------------------------------------------------------------------------------------------

// Additional props for AUDIO contentItems.
export type AudioContentItemProps = {
  // Limit contentItem type to AUDIO,
  +type: typeof types.contentItemTypes.AUDIO,
  // Custom AUDIO props go here.
};

// Type for an AUDIO contentItem.
export type AudioContentItem = {
  ...$Exact<MediaContentItem>,
  ...$Exact<TaggableContentItem>,
  ...$Exact<SubableContentItem>,
  ...$Exact<AudioContentItemProps>,
};

// Type for a denormalized AUDIO contentItem.
export type DenormalizedAudioContentItem = {
  ...$Exact<MediaContentItem>,
  ...$Exact<TaggableContentItem>,
  ...$Exact<DenormalizedSubableContentItem>,
  ...$Exact<AudioContentItemProps>,
};

// List of AUDIO contentItem props that can be edited through propsForType.
export const editablePropsForAudioContentItem = [
  ...editablePropsForMediaContentItem,
  ...editablePropsForTaggableContentItem,
  ...editablePropsForSubableContentItem,
];


// IFRAME ------------------------------------------------------------------------------------------

// Additional props for IFRAME contentItems.
export type IframeContentItemProps = {
  // Limit contentItem type to IFRAME.
  +type: typeof types.contentItemTypes.IFRAME,
  // Custom IFRAME props go here.
};

// Type for an IFRAME contentItem.
export type IframeContentItem = {
  ...$Exact<MediaContentItem>,
  ...$Exact<TaggableContentItem>,
  ...$Exact<SubableContentItem>,
  ...$Exact<IframeContentItemProps>,
};

// Type for a denormalized IFRAME contentItem.
export type DenormalizedIframeContentItem = {
  ...$Exact<MediaContentItem>,
  ...$Exact<TaggableContentItem>,
  ...$Exact<DenormalizedSubableContentItem>,
  ...$Exact<IframeContentItemProps>,
};

// List of IFRAME contentItem props that can be edited through propsForType.
export const editablePropsForIframeContentItem = [
  ...editablePropsForMediaContentItem,
  ...editablePropsForTaggableContentItem,
  ...editablePropsForSubableContentItem,
];


// SLIDE_BREAK -------------------------------------------------------------------------------------

// Additional props for SLIDE_BREAK contentItems.
export type SlideBreakContentItemProps = {
  // Limit contentItem type to SLIDE_BREAK.
  +type: typeof types.contentItemTypes.SLIDE_BREAK,
  // Custom SLIDE_BREAK props go here.
};

// Type for a SLIDE_BREAK contentItem.
export type SlideBreakContentItem = {
  ...$Exact<SymbolContentItem>,
  ...$Exact<SlideBreakContentItemProps>,
};

// Type for a denormalized SLIDE_BREAK contentItem.
export type DenormalizedSlideBreakContentItem = {
  ...$Exact<SymbolContentItem>,
  ...$Exact<SlideBreakContentItemProps>,
};

// List of SLIDE_BREAK contentItem props that can be edited through propsForType.
export const editablePropsForSlideBreakContentItem = [
  ...editablePropsForSymbolContentItem,
];


// COURSE_BREAK ------------------------------------------------------------------------------------

// Additional props for COURSE_BREAK contentItems.
export type CourseBreakContentItemProps = {
  // Limit contentItem type to COURSE_BREAK.
  +type: typeof types.contentItemTypes.COURSE_BREAK,
  // Custom COURSE_BREAK props go here.
};

// Type for a COURSE_BREAK contentItem.
export type CourseBreakContentItem = {
  ...$Exact<SymbolContentItem>,
  ...$Exact<CourseBreakContentItemProps>,
};

// Type for a denormalized COURSE_BREAK contentItem.
export type DenormalizedCourseBreakContentItem = {
  ...$Exact<SymbolContentItem>,
  ...$Exact<CourseBreakContentItemProps>,
};

// List of COURSE_BREAK contentItem props that can be edited through propsForType.
export const editablePropsForCourseBreakContentItem = [
  ...editablePropsForSymbolContentItem,
];


// CONTENT_ITEM ------------------------------------------------------------------------------------

// Type for generic contentItems.
export type ContentItem =
  | RootContentItem
  | HeadingContentItem
  | ParagraphContentItem
  | ListContentItem
  | ListItemContentItem
  | BlockquoteContentItem
  | CodeContentItem
  | ImageContentItem
  | VideoContentItem
  | AudioContentItem
  | IframeContentItem
  | SlideBreakContentItem
  | CourseBreakContentItem;

// Type for generic denormalized contentItems.
export type DenormalizedContentItem =
  | DenormalizedRootContentItem
  | DenormalizedHeadingContentItem
  | DenormalizedParagraphContentItem
  | DenormalizedListContentItem
  | DenormalizedListItemContentItem
  | DenormalizedBlockquoteContentItem
  | DenormalizedCodeContentItem
  | DenormalizedImageContentItem
  | DenormalizedVideoContentItem
  | DenormalizedAudioContentItem
  | DenormalizedIframeContentItem
  | DenormalizedSlideBreakContentItem
  | DenormalizedCourseBreakContentItem;

// Map contentItemTypes to their editable props lists.
export const editablePropsForType = {
  [types.contentItemTypes.ROOT]: editablePropsForRootContentItem,
  [types.contentItemTypes.HEADING]: editablePropsForHeadingContentItem,
  [types.contentItemTypes.PARAGRAPH]: editablePropsForParagraphContentItem,
  [types.contentItemTypes.LIST]: editablePropsForListContentItem,
  [types.contentItemTypes.LIST_ITEM]: editablePropsForListItemContentItem,
  [types.contentItemTypes.BLOCKQUOTE]: editablePropsForBlockquoteContentItem,
  [types.contentItemTypes.CODE]: editablePropsForCodeContentItem,
  [types.contentItemTypes.IMAGE]: editablePropsForImageContentItem,
  [types.contentItemTypes.VIDEO]: editablePropsForVideoContentItem,
  [types.contentItemTypes.AUDIO]: editablePropsForAudioContentItem,
  [types.contentItemTypes.IFRAME]: editablePropsForIframeContentItem,
  [types.contentItemTypes.SLIDE_BREAK]: editablePropsForSlideBreakContentItem,
  [types.contentItemTypes.COURSE_BREAK]: editablePropsForCourseBreakContentItem,
};

// Type object containing all possible props for all possible types.
export type AllPropsForAllTypes = {
  ...$Exact<RootContentItem>,
  ...$Exact<HeadingContentItem>,
  ...$Exact<ParagraphContentItem>,
  ...$Exact<ListContentItem>,
  ...$Exact<ListItemContentItem>,
  ...$Exact<BlockquoteContentItem>,
  ...$Exact<CodeContentItem>,
  ...$Exact<ImageContentItem>,
  ...$Exact<VideoContentItem>,
  ...$Exact<AudioContentItem>,
  ...$Exact<IframeContentItem>,
  ...$Exact<SlideBreakContentItem>,
  ...$Exact<CourseBreakContentItem>,
  // Reset this to the generic contentItemType
  +type: types.ContentItemType,
};


// STATE -------------------------------------------------------------------------------------------

export type ContentItemsById = {
  +[contentItemId: Identifier]: ContentItem,
};

export type ContentItemsState = {
  +byId: ContentItemsById,
};


// EXPORTS -----------------------------------------------------------------------------------------

export * from './contentItemTypes';
export * from './metadata';
export * from './tags';
export * from './visibilities';
export * from './context';