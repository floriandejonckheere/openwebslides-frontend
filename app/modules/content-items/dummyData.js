// @flow

import { contentItemTypes, highlightTypes } from './model';
import type {
  ParagraphContentItem,
  ContentItemsState,
} from './model';

export const dummyContentItems: ContentItemsState = {
  w4lg2u0p1h: {
    id: 'w4lg2u0p1h',
    type: contentItemTypes.ROOT,
    childItemIds: ['qflasjgtxr'],
  },
  qflasjgtxr: {
    id: 'qflasjgtxr',
    type: contentItemTypes.HEADING,
    text: 'Lorem ipsum',
    highlights: [],
    metadata: {
      tags: [],
      visibilityOverrides: {},
    },
    subItemIds: ['plqfm799be', 'a8ntqiiho1'],
  },
  plqfm799be: ({
    id: 'plqfm799be',
    type: contentItemTypes.PARAGRAPH,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    highlights: [
      {
        // Highlights the word 'ipsum'.
        type: highlightTypes.STRONG_EMPHASIS,
        position: {
          start: 6,
          length: 5,
        },
      },
      {
        // Adds link to the word 'consectetur'.
        type: highlightTypes.LINK,
        position: {
          start: 28,
          length: 11,
        },
        href: 'https://www.lipsum.com',
      },
    ],
    metadata: {
      tags: [],
      visibilityOverrides: {},
    },
    subItemIds: [],
  }: ParagraphContentItem),
  a8ntqiiho1: ({
    id: 'a8ntqiiho1',
    type: contentItemTypes.PARAGRAPH,
    text: 'Mauris accumsan pretium sem, in volutpat nibh sodales a. Nulla blandit posuere ex, et facilisis dui volutpat in. Fusce tincidunt sed ipsum quis varius. Quisque vitae laoreet sem.',
    highlights: [],
    metadata: {
      tags: [],
      visibilityOverrides: {},
    },
    subItemIds: [],
  }: ParagraphContentItem),
  qyrgv0bcd6: {
    id: 'qyrgv0bcd6',
    type: contentItemTypes.ROOT,
    childItemIds: ['j0vcu0y7vk', 'ua32xchh7q'],
  },
  j0vcu0y7vk: {
    id: 'j0vcu0y7vk',
    type: contentItemTypes.HEADING,
    text: 'Nam malesuada fermentum',
    highlights: [],
    metadata: {
      tags: [],
      visibilityOverrides: {},
    },
    subItemIds: ['yp8bumunth', 'u9niafk733'],
  },
  yp8bumunth: ({
    id: 'yp8bumunth',
    type: contentItemTypes.PARAGRAPH,
    text: 'Nullam ultrices rhoncus quam vulputate bibendum. Aliquam vehicula augue quis nibh iaculis semper.',
    highlights: [],
    metadata: {
      tags: [],
      visibilityOverrides: {},
    },
    subItemIds: ['uieqlbgnxb'],
  }: ParagraphContentItem),
  uieqlbgnxb: ({
    id: 'uieqlbgnxb',
    type: contentItemTypes.PARAGRAPH,
    text: 'Morbi sed felis quis mi luctus malesuada at eu neque. Integer auctor lorem leo, ut semper massa dignissim et. Nulla dictum ullamcorper mattis. Suspendisse suscipit porttitor gravida. Aliquam porttitor tortor augue, sit amet lacinia ligula sodales sit amet.',
    highlights: [],
    metadata: {
      tags: [],
      visibilityOverrides: {},
    },
    subItemIds: [],
  }: ParagraphContentItem),
  u9niafk733: ({
    id: 'u9niafk733',
    type: contentItemTypes.PARAGRAPH,
    text: 'In sapien erat, venenatis iaculis volutpat in, pulvinar eu augue. Vestibulum porta euismod urna ac tempus. Praesent malesuada, ligula sed venenatis dictum, nulla ante finibus sem, nec suscipit felis lacus at urna. Vestibulum nec gravida sem. Pellentesque magna tortor, hendrerit ac nulla vitae, placerat gravida tortor.',
    highlights: [],
    metadata: {
      tags: [],
      visibilityOverrides: {},
    },
    subItemIds: ['vrci6v35s7', 'cpi389s1e3'],
  }: ParagraphContentItem),
  vrci6v35s7: ({
    id: 'vrci6v35s7',
    type: contentItemTypes.PARAGRAPH,
    text: 'Sed hendrerit eget metus nec elementum. Aenean commodo semper sapien, nec porta leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit elit et metus tincidunt semper. Sed ac tellus odio. Sed placerat faucibus leo a convallis. Pellentesque eget libero at lacus rutrum pretium.',
    highlights: [],
    metadata: {
      tags: [],
      visibilityOverrides: {},
    },
    subItemIds: [],
  }: ParagraphContentItem),
  cpi389s1e3: ({
    id: 'cpi389s1e3',
    type: contentItemTypes.PARAGRAPH,
    text: 'Sed ut neque tristique, venenatis purus a, consequat orci. Aenean sed lectus et ante aliquet maximus. Integer hendrerit odio volutpat tincidunt consectetur. Cras venenatis, nibh a dignissim consectetur, augue tortor viverra nisi, quis euismod urna ligula ac turpis. Pellentesque eget faucibus urna, id sodales odio. Quisque ipsum ante, fringilla elementum mauris vel, tincidunt rhoncus augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    highlights: [],
    metadata: {
      tags: [],
      visibilityOverrides: {},
    },
    subItemIds: [],
  }: ParagraphContentItem),
  ua32xchh7q: {
    id: 'ua32xchh7q',
    type: contentItemTypes.HEADING,
    text: 'Phasellus posuere tincidunt enim',
    highlights: [],
    metadata: {
      tags: [],
      visibilityOverrides: {},
    },
    subItemIds: ['rnnvciso5i', 'bz807z2zha'],
  },
  rnnvciso5i: ({
    id: 'rnnvciso5i',
    type: contentItemTypes.PARAGRAPH,
    text: 'Etiam euismod sed erat vel tincidunt. Ut at dui non orci tincidunt ultricies. Sed aliquam ligula ultrices pretium laoreet.',
    highlights: [],
    metadata: {
      tags: [],
      visibilityOverrides: {},
    },
    subItemIds: [],
  }: ParagraphContentItem),
  bz807z2zha: ({
    id: 'bz807z2zha',
    type: contentItemTypes.PARAGRAPH,
    text: 'Nullam pharetra malesuada nibh, nec gravida turpis pharetra nec. Donec nec semper dolor.',
    highlights: [],
    metadata: {
      tags: [],
      visibilityOverrides: {},
    },
    subItemIds: [],
  }: ParagraphContentItem),
};