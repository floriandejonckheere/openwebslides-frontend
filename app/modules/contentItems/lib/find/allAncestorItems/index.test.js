// @flow

import { dummyContentItemData as dummyData } from 'lib/testResources';

import lib from '../..';
import * as m from '../../../model';

describe(`findAllAncestorItems`, (): void => {

  let dummyParagraph22: m.ParagraphContentItem;
  let dummyParagraph21: m.ParagraphContentItem;
  let dummyHeading2: m.HeadingContentItem;
  let dummyParagraph122: m.ParagraphContentItem;
  let dummyParagraph121: m.ParagraphContentItem;
  let dummyHeading12: m.HeadingContentItem;
  let dummyParagraph1122: m.ParagraphContentItem;
  let dummyParagraph1121: m.ParagraphContentItem;
  let dummyParagraph112: m.ParagraphContentItem;
  let dummyParagraph111: m.ParagraphContentItem;
  let dummyHeading11: m.HeadingContentItem;
  let dummyHeading1: m.HeadingContentItem;
  let dummyRoot: m.RootContentItem;
  let dummyContentItemsById: m.ContentItemsById;

  beforeEach((): void => {
    dummyParagraph22 = { ...dummyData.paragraphContentItem8 };
    dummyParagraph21 = { ...dummyData.paragraphContentItem7 };
    dummyHeading2 = {
      ...dummyData.headingContentItem4,
      subItemIds: [dummyParagraph21.id, dummyParagraph22.id],
    };
    dummyParagraph122 = { ...dummyData.paragraphContentItem6 };
    dummyParagraph121 = { ...dummyData.paragraphContentItem5 };
    dummyHeading12 = {
      ...dummyData.headingContentItem3,
      subItemIds: [dummyParagraph121.id, dummyParagraph122.id],
    };
    dummyParagraph1122 = { ...dummyData.paragraphContentItem4 };
    dummyParagraph1121 = { ...dummyData.paragraphContentItem3 };
    dummyParagraph112 = {
      ...dummyData.paragraphContentItem2,
      subItemIds: [dummyParagraph1121.id, dummyParagraph1122.id],
    };
    dummyParagraph111 = { ...dummyData.paragraphContentItem };
    dummyHeading11 = {
      ...dummyData.headingContentItem2,
      subItemIds: [dummyParagraph111.id, dummyParagraph112.id],
    };
    dummyHeading1 = {
      ...dummyData.headingContentItem,
      subItemIds: [dummyHeading11.id, dummyHeading12.id],
    };
    dummyRoot = {
      ...dummyData.rootContentItem,
      subItemIds: [dummyHeading1.id, dummyHeading2.id],
    };
    dummyContentItemsById = {
      [dummyRoot.id]: dummyRoot,
      [dummyHeading1.id]: dummyHeading1,
      [dummyHeading11.id]: dummyHeading11,
      [dummyParagraph111.id]: dummyParagraph111,
      [dummyParagraph112.id]: dummyParagraph112,
      [dummyParagraph1121.id]: dummyParagraph1121,
      [dummyParagraph1122.id]: dummyParagraph1122,
      [dummyHeading12.id]: dummyHeading12,
      [dummyParagraph121.id]: dummyParagraph121,
      [dummyParagraph122.id]: dummyParagraph122,
      [dummyHeading2.id]: dummyHeading2,
      [dummyParagraph21.id]: dummyParagraph21,
      [dummyParagraph22.id]: dummyParagraph22,
    };
  });

  it(`returns an array containing all of the passed contentItem's ancestorItems, when the passed contentItem is a subItem`, (): void => {
    const actualResult = lib.find.allAncestorItems(dummyParagraph1122, dummyContentItemsById);
    expect(actualResult).toHaveLength(4);
    expect(actualResult[0]).toBe(dummyParagraph112);
    expect(actualResult[1]).toBe(dummyHeading11);
    expect(actualResult[2]).toBe(dummyHeading1);
    expect(actualResult[3]).toBe(dummyRoot);
  });

  it(`returns an empty array, when the passed contentItem is not a subItem (i.e. is a ROOT)`, (): void => {
    const actualResult = lib.find.allAncestorItems(dummyRoot, dummyContentItemsById);
    expect(actualResult).toHaveLength(0);
  });

  it(`returns an empty array, when the passed contentItem is NULL`, (): void => {
    const actualResult = lib.find.allAncestorItems(null, dummyContentItemsById);
    expect(actualResult).toHaveLength(0);
  });

});
