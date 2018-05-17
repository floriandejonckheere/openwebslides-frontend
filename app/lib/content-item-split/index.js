// @flow

import type {
  DenormalizedContentItem,
} from 'modules/content-items';

import { contentItemTypes } from 'modules/content-items';

/**
 * Automatic slide splitting algorithm
 * @param contentItem: ContentItem
 * @returns Array<DenormalizedContentItem>
 */
const split = (
  contentItem: DenormalizedContentItem,
): Array<DenormalizedContentItem> => {
  switch (contentItem.type) {
    case contentItemTypes.ROOT:
      console.log(`ROOT: splitting recursively into ${contentItem.childItems.length}`);
      // ROOT content item: split into childItems and recurse
      return contentItem.childItems
        .map((
          c: DenormalizedContentItem,
        ): Array<DenormalizedContentItem> => {
          return split(c);
        })
        .reduce((
          arr: Array<DenormalizedContentItem>,
          c: DenormalizedContentItem,
        ): Array<DenormalizedContentItem> => {
          return arr.concat(c);
        }, []);
    case contentItemTypes.HEADING: {
      console.log(`HEADING: splitting into ${contentItem.subItems.length}`);
      /**
       * Algorithm for splitting subheadings, while duplicating the top-level heading
       *
       * Main Heading
       *    ├─ Paragraph A
       *    ├─ Subheading 1
       *    │     └─ Paragraph B
       *    └─ Subheading 2
       *          └─ Paragraph C
       *
       * To
       *
       * Main Heading
       *    ├─ Paragraph A
       *    └─ Subheading 1
       *          └─ Paragraph B
       * Main Heading
       *    └─ Subheading 2
       *          └─ Paragraph C
       */

      // Return a copy of the top-level heading
      const createHeading = (): DenormalizedContentItem => {
        return {
          ...contentItem,
          subItems: [],
        };
      };

      // Loop over top-level heading's children, splitting and
      // duplicating the top-level heading where necessary.
      return contentItem.subItems.reduce((
        arr: Array<DenormalizedContentItem>,
        item: DenormalizedContentItem,
      ): Array<DenormalizedContentItem> => {
        if (item.type === contentItemTypes.HEADING && arr[arr.length - 1].subItems.length !== 0) {
          // If child is a heading, create and push a new top-level heading
          // Except if the previous top-level heading has no children (which means that
          // the current subheading is a direct child of the top-level heading)
          arr.push(createHeading());
        }

        // Add the child to the last top-level heading
        arr[arr.length - 1].subItems.push(item);
        return arr;
      },
      [createHeading()]);
    }
    default:
      console.log(`UNKNOWN: not splitting any further`);
      return [contentItem];
  }
};

export default split;
