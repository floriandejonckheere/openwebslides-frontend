// @flow

import * as React from 'react';
import { mount } from 'enzyme';
import { wrapInTestContext } from 'react-dnd-test-utils';

import { DummyProviders, dummyContentItemData as dummyData } from 'lib/testResources';

import * as m from '../../../model';

import Draggable, { PureDraggable, source } from '.';

describe(`EditableDisplay`, (): void => {

  let dummyConnectDragSource: any;
  let dummyContentItem: m.ContentItem;

  let TestDraggable: any;

  beforeEach((): void => {
    dummyConnectDragSource = (body) => body;
    dummyContentItem = dummyData.paragraphContentItem;

    TestDraggable = wrapInTestContext(Draggable);
  });

  it(`renders without errors`, (): void => {
    const enzymeWrapper = mount(
      <DummyProviders>
        <Draggable contentItem={dummyContentItem} />
      </DummyProviders>,
    );

    expect(enzymeWrapper.isEmptyRender()).toBe(false);
  });

  it(`renders the component without .draggable--active class when it is not dragging`, (): void => {
    const enzymeWrapper = mount(
      <PureDraggable
        connectDragSource={dummyConnectDragSource}
        isDragging={false}
      />,
    );

    expect(enzymeWrapper.find('.draggable').hasClass('draggable--active')).toBe(false);
  });

  it(`renders the component with .draggable--active class when it is dragging`, (): void => {
    const enzymeWrapper = mount(
      <PureDraggable
        connectDragSource={dummyConnectDragSource}
        isDragging={true}
      />,
    );

    expect(enzymeWrapper.find('.draggable').hasClass('draggable--active')).toBe(true);
  });

  it(`renders the passed children`, (): void => {
    const enzymeWrapper = mount(
      <PureDraggable
        connectDragSource={dummyConnectDragSource}
        isDragging={true}
      >
        <div data-test-id="test-children">test children</div>
      </PureDraggable>,
    );

    expect(enzymeWrapper.find('[data-test-id="test-children"]').hostNodes()).toHaveLength(1);
  });

  it(`returns the content item id as drag source type`, (): void => {
    expect(source.beginDrag({ contentItem: dummyContentItem })).toStrictEqual({ id: dummyContentItem });
  });

  it(`returns the content item type as draggable type`, (): void => {
    const enzymeWrapper = mount(<TestDraggable contentItem={dummyContentItem} />);

    expect([...enzymeWrapper.instance().getManager().getRegistry().types.values()][0]).toStrictEqual(dummyContentItem.type);
  });

});
