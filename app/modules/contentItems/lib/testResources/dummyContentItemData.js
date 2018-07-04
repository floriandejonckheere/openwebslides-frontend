// @flow

import * as model from '../../model';

export const emptyMetadata = {
  tags: [],
  visibilityOverrides: {},
};

export const rootContentItem: $Exact<model.RootContentItem> = {
  id: 'dummyRootContentItem',
  type: model.contentItemTypes.ROOT,
  isEditing: false,
  childItemIds: [],
};

export const rootContentItem2: $Exact<model.RootContentItem> = {
  id: 'dummyRootContentItem2',
  type: model.contentItemTypes.ROOT,
  isEditing: false,
  childItemIds: [],
};

export const rootContentItem3: $Exact<model.RootContentItem> = {
  id: 'dummyRootContentItem3',
  type: model.contentItemTypes.ROOT,
  isEditing: false,
  childItemIds: [],
};

export const headingContentItem: $Exact<model.HeadingContentItem> = {
  id: 'dummyHeadingContentItem',
  type: model.contentItemTypes.HEADING,
  isEditing: false,
  text: 'Lorem ipsum dolor sit amet',
  metadata: emptyMetadata,
  subItemIds: [],
};

export const headingContentItem2: $Exact<model.HeadingContentItem> = {
  id: 'dummyHeadingContentItem2',
  type: model.contentItemTypes.HEADING,
  isEditing: false,
  text: 'Duis non orci vitae eros vehicula placerat',
  metadata: emptyMetadata,
  subItemIds: [],
};

export const headingContentItem3: $Exact<model.HeadingContentItem> = {
  id: 'dummyHeadingContentItem3',
  type: model.contentItemTypes.HEADING,
  isEditing: false,
  text: 'Mauris id tempus metus',
  metadata: emptyMetadata,
  subItemIds: [],
};

export const headingContentItem4: $Exact<model.HeadingContentItem> = {
  id: 'dummyHeadingContentItem4',
  type: model.contentItemTypes.HEADING,
  isEditing: false,
  text: 'Ut blandit nisi id sem rhoncus',
  metadata: emptyMetadata,
  subItemIds: [],
};

export const headingContentItem5: $Exact<model.HeadingContentItem> = {
  id: 'dummyHeadingContentItem5',
  type: model.contentItemTypes.HEADING,
  isEditing: false,
  text: 'A egestas odio eleifend',
  metadata: emptyMetadata,
  subItemIds: [],
};

export const headingContentItem6: $Exact<model.HeadingContentItem> = {
  id: 'dummyHeadingContentItem6',
  type: model.contentItemTypes.HEADING,
  isEditing: false,
  text: 'Morbi molestie dui velit',
  metadata: emptyMetadata,
  subItemIds: [],
};

export const paragraphContentItem: $Exact<model.ParagraphContentItem> = {
  id: 'dummyParagraphContentItem',
  type: model.contentItemTypes.PARAGRAPH,
  isEditing: false,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  metadata: emptyMetadata,
  subItemIds: [],
};

export const paragraphContentItem2: $Exact<model.ParagraphContentItem> = {
  id: 'dummyParagraphContentItem2',
  type: model.contentItemTypes.PARAGRAPH,
  isEditing: false,
  text: 'Ut facilisis tristique diam a consequat.',
  metadata: emptyMetadata,
  subItemIds: [],
};

export const paragraphContentItem3: $Exact<model.ParagraphContentItem> = {
  id: 'dummyParagraphContentItem3',
  type: model.contentItemTypes.PARAGRAPH,
  isEditing: false,
  text: 'Ut facilisis tristique diam a consequat.',
  metadata: emptyMetadata,
  subItemIds: [],
};

export const paragraphContentItem4: $Exact<model.ParagraphContentItem> = {
  id: 'dummyParagraphContentItem4',
  type: model.contentItemTypes.PARAGRAPH,
  isEditing: false,
  text: 'Sed placerat porta tortor, ac dignissim sem vestibulum eget.',
  metadata: emptyMetadata,
  subItemIds: [],
};

export const paragraphContentItem5: $Exact<model.ParagraphContentItem> = {
  id: 'dummyParagraphContentItem5',
  type: model.contentItemTypes.PARAGRAPH,
  isEditing: false,
  text: 'Nam elementum erat neque, sed bibendum purus rhoncus in.',
  metadata: emptyMetadata,
  subItemIds: [],
};

export const paragraphContentItem6: $Exact<model.ParagraphContentItem> = {
  id: 'dummyParagraphContentItem6',
  type: model.contentItemTypes.PARAGRAPH,
  isEditing: false,
  text: 'Integer vel sodales justo. Fusce eu ex eget turpis venenatis condimentum sed eu urna.',
  metadata: emptyMetadata,
  subItemIds: [],
};

export const paragraphContentItem7: $Exact<model.ParagraphContentItem> = {
  id: 'dummyParagraphContentItem7',
  type: model.contentItemTypes.PARAGRAPH,
  isEditing: false,
  text: 'Vivamus ullamcorper malesuada erat.',
  metadata: emptyMetadata,
  subItemIds: [],
};

export const paragraphContentItem8: $Exact<model.ParagraphContentItem> = {
  id: 'dummyParagraphContentItem8',
  type: model.contentItemTypes.PARAGRAPH,
  isEditing: false,
  text: 'In fringilla, odio et varius placerat, sem purus venenatis purus, in imperdiet massa tellus in justo. ',
  metadata: emptyMetadata,
  subItemIds: [],
};

export const paragraphContentItem9: $Exact<model.ParagraphContentItem> = {
  id: 'dummyParagraphContentItem9',
  type: model.contentItemTypes.PARAGRAPH,
  isEditing: false,
  text: 'Mauris feugiat lacus non purus pellentesque, sed lobortis erat tincidunt.',
  metadata: emptyMetadata,
  subItemIds: [],
};

export const paragraphContentItem10: $Exact<model.ParagraphContentItem> = {
  id: 'dummyParagraphContentItem10',
  type: model.contentItemTypes.PARAGRAPH,
  isEditing: false,
  text: 'Nulla enim turpis, gravida eget malesuada eu, molestie at lorem.',
  metadata: emptyMetadata,
  subItemIds: [],
};

export const paragraphContentItem11: $Exact<model.ParagraphContentItem> = {
  id: 'dummyParagraphContentItem11',
  type: model.contentItemTypes.PARAGRAPH,
  isEditing: false,
  text: 'In sollicitudin erat ut eros molestie, at pellentesque diam blandit.',
  metadata: emptyMetadata,
  subItemIds: [],
};

export const paragraphContentItem12: $Exact<model.ParagraphContentItem> = {
  id: 'dummyParagraphContentItem12',
  type: model.contentItemTypes.PARAGRAPH,
  isEditing: false,
  text: 'Phasellus luctus nunc nunc, ac vestibulum tortor pellentesque at.',
  metadata: emptyMetadata,
  subItemIds: [],
};

export const listContentItem: $Exact<model.ListContentItem> = {
  id: 'dummyListContentItem',
  type: model.contentItemTypes.LIST,
  isEditing: false,
  metadata: emptyMetadata,
  subItemIds: [],
  childItemIds: [],
  ordered: false,
};

export const listItemContentItem: $Exact<model.ListItemContentItem> = {
  id: 'dummyListItemContentItem',
  type: model.contentItemTypes.LIST_ITEM,
  isEditing: false,
  text: 'This is a list item.',
  metadata: emptyMetadata,
};

export const blockquoteContentItem: $Exact<model.BlockquoteContentItem> = {
  id: 'dummyBlockquoteContentItem',
  type: model.contentItemTypes.BLOCKQUOTE,
  isEditing: false,
  text: 'Do. Or do not. There is no try.',
  metadata: emptyMetadata,
  subItemIds: [],
  cite: 'Yoda',
  href: 'http://www.starwars.com/news/the-starwars-com-10-best-yoda-quotes',
};

export const codeContentItem: $Exact<model.CodeContentItem> = {
  id: 'dummyCodeContentItem',
  type: model.contentItemTypes.CODE,
  isEditing: false,
  text: 'console.log("Hello world!");',
  metadata: emptyMetadata,
  subItemIds: [],
  language: 'JavaScript',
};

export const imageContentItem: $Exact<model.ImageContentItem> = {
  id: 'dummyImageContentItem',
  type: model.contentItemTypes.IMAGE,
  isEditing: false,
  metadata: emptyMetadata,
  subItemIds: [],
  src: 'https://lumiere-a.akamaihd.net/v1/images/Yoda-Retina_2a7ecc26.jpeg',
  alt: 'Yoda looking Yoda-ish.',
  caption: 'Legendary Jedi Master',
};

export const videoContentItem: $Exact<model.VideoContentItem> = {
  id: 'dummyVideoContentItem',
  type: model.contentItemTypes.VIDEO,
  isEditing: false,
  metadata: emptyMetadata,
  subItemIds: [],
  src: 'https://youtu.be/BQ4yd2W50No',
  alt: 'Yoda doing Yoda things.',
  caption: 'Legendary Jedi Master teaching Luke.',
};

export const audioContentItem: $Exact<model.AudioContentItem> = {
  id: 'dummyAudioContentItem',
  type: model.contentItemTypes.AUDIO,
  isEditing: false,
  metadata: emptyMetadata,
  subItemIds: [],
  src: 'http://pretend-i-found-a-yoda-audio-fragment.com/example.mp3',
  alt: 'Yoda saying Yoda things.',
  caption: null, // Caption may be NULL.
};

export const iframeContentItem: $Exact<model.IframeContentItem> = {
  id: 'dummyIframeContentItem',
  type: model.contentItemTypes.IFRAME,
  isEditing: false,
  metadata: emptyMetadata,
  subItemIds: [],
  src: 'http://www.starwars.com/databank/yoda',
  alt: 'Yoda entry in the Star Wars databank.',
  caption: null,
};

export const slideBreakContentItem: $Exact<model.SlideBreakContentItem> = {
  id: 'dummySlideBreakContentItem',
  type: model.contentItemTypes.SLIDE_BREAK,
  isEditing: false,
};

export const courseBreakContentItem: $Exact<model.CourseBreakContentItem> = {
  id: 'dummyCourseBreakContentItem',
  type: model.contentItemTypes.COURSE_BREAK,
  isEditing: false,
};
