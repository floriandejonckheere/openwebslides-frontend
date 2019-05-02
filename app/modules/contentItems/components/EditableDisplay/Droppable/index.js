// @flow

import * as React from 'react';
import {
  DropTarget,
  type DropTargetConnector,
  type DropTargetMonitor,
  type DropTargetCollector,
} from 'react-dnd';

import * as m from '../../../model';

type PassedProps = {|
  contentItemId: string,
  children: React.Node,
|};

type Props = {| ...PassedProps, ...DropTargetCollector |};

const target = {
  drop(props: Props, monitor: DropTargetMonitor): void {
    const item = monitor.getItem();

    // TODO: drop implementation
    console.log(`drop ${item.id}`);
  },
  canDrop(props: Props, monitor: DropTargetMonitor): boolean {
    const { contentItemId } = props;

    // Do not allow dropping onto itself
    return monitor.getItem().id !== contentItemId;
  },
};

const collect = (connect: DropTargetConnector, monitor: DropTargetMonitor): DropTargetCollector => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver({ shallow: true }) && monitor.canDrop(),
  };
};

const PureDroppable = (props: Props): React.Node => {
  const { connectDropTarget, isOver, children } = props;

  return connectDropTarget(
    <div className={`droppable ${isOver ? 'droppable--active' : ''}`}>
      {children}
    </div>,
  );
};

const Droppable = DropTarget(
  m.contentItemTypes.ROOT, // TODO: replace with content item-specific type
  target,
  collect,
)(PureDroppable);

export { PureDroppable };
export default Droppable;
