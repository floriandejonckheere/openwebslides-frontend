// @flow

import _ from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';
import { type Dispatch } from 'redux';

import { type State } from 'types/state';
import { type Action } from 'types/action';

import actions from '../../actions';
import * as m from '../../model';
import selectors from '../../selectors';

import typesToComponentsMap from './typesToComponentsMap';

type PassedProps = {|
  contentItemId: string,
|};

type StateProps = {|
  contentItem: ?m.ContentItem,
|};

type DispatchProps = {|
  onStartEditing: (id: string) => void,
  onEndEditing: (id: string) => void,
  onEditPlainText: (id: string, text: string) => void,
  onAddEmptySubItem: (id: string) => void,
  onAddEmptySiblingItemBelow: (id: string) => void,
  onRemove: (id: string) => void,
  onIndent: (id: string) => void,
  onReverseIndent: (id: string) => void,
|};

type Props = {| ...PassedProps, ...StateProps, ...DispatchProps |};

const passThroughProps = [
  'onStartEditing',
  'onEndEditing',
  'onEditPlainText',
  'onAddEmptySubItem',
  'onAddEmptySiblingItemBelow',
  'onRemove',
  'onIndent',
  'onReverseIndent',
];

const mapStateToProps = (state: State, props: PassedProps): StateProps => {
  const { contentItemId } = props;
  return {
    contentItem: selectors.getById(state, { id: contentItemId }),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>, props: PassedProps): DispatchProps => {
  return {
    onStartEditing: (id: string): void => {
      dispatch(actions.toggleEditing(id, true));
    },
    onEndEditing: (id: string): void => {
      dispatch(actions.toggleEditing(id, false));
    },
    onEditPlainText: (id: string, text: string): void => {
      dispatch(actions.edit(id, { text }));
    },
    onAddEmptySubItem: (id: string): void => {
      dispatch(actions.toggleEditing(id, false));
      dispatch(actions.add(
        m.contentItemTypes.PARAGRAPH,
        {
          contextType: m.contextTypes.SUPER,
          contextItemId: id,
          indexInSiblingItems: 0,
        },
        { text: '' },
      ));
    },
    onAddEmptySiblingItemBelow: (id: string): void => {
      dispatch(actions.toggleEditing(id, false));
      dispatch(actions.add(
        m.contentItemTypes.PARAGRAPH,
        {
          contextType: m.contextTypes.SIBLING,
          contextItemId: id,
          indexInSiblingItemsShift: 0,
        },
        { text: '' },
      ));
    },
    onRemove: (id: string): void => {
      dispatch(actions.removeAndTogglePreviousItem(id));
    },
    onIndent: (id: string): void => {
      dispatch(actions.indent(id));
    },
    onReverseIndent: (id: string): void => {
      dispatch(actions.reverseIndent(id));
    },
  };
};

class PureEditableDisplay extends React.Component<Props> {
  renderSubItemsEditableDisplay = (contentItem: m.ContentItem): React.Node => {
    if (
      contentItem == null
      || contentItem.subItemIds == null
      || contentItem.subItemIds.length === 0
    ) {
      return null;
    }
    else {
      return (
        <div
          className="content-item-editable-display__sub-items"
          data-test-id="content-item-editable-display__sub-items"
        >
          {contentItem.subItemIds.map((subItemId: string): React.Node => (
            <EditableDisplay
              {..._.pick(this.props, passThroughProps)}
              key={subItemId}
              contentItemId={subItemId}
            />
          ))}
        </div>
      );
    }
  };

  renderEditableDisplay = (contentItem: m.ContentItem): React.Node => {
    const DisplayComponent = typesToComponentsMap[contentItem.type];

    return (
      <div
        className="content-item-editable-display"
        data-test-id="content-item-editable-display"
      >
        <DisplayComponent
          {..._.pick(this.props, passThroughProps)}
          contentItem={contentItem}
        />
        {this.renderSubItemsEditableDisplay(contentItem)}
      </div>
    );
  };

  render(): React.Node {
    const { contentItem } = this.props;
    return (contentItem == null) ? null : this.renderEditableDisplay(contentItem);
  }
}

const EditableDisplay = connect(mapStateToProps, mapDispatchToProps)(PureEditableDisplay);

export { PureEditableDisplay, passThroughProps, mapDispatchToProps };
export type { DispatchProps };
export default EditableDisplay;
