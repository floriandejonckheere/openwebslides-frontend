// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { withNamespaces, type TranslatorProps } from 'react-i18next';
import { Message } from 'semantic-ui-react';
import { getLatestMessage } from 'redux-flash';

import { type AppState } from 'types/redux';

type Flash = {|
  id: string,
  message: string,
  isError: boolean,
  props: {
    [string]: string,
  },
|};

type StateProps = {|
  flash: ?Flash,
|};

type Props = {| ...TranslatorProps, ...StateProps |};

const mapStateToProps = (state: AppState): StateProps => {
  return {
    flash: getLatestMessage(state),
  };
};

const PureFlashMessages = (props: Props): React.Node => {
  const { t, flash } = props;

  if (!flash) {
    return null;
  }

  let flashTitle: string = flash.isError ? t('flash:title.error') : t('flash:title.success');

  if (flash.props.title) {
    flashTitle = t(flash.props.title);
  }

  return (
    <Message positive={!flash.isError} negative={flash.isError}>
      <Message.Header>{flashTitle}</Message.Header>
      <p>{t(flash.message)}</p>
    </Message>
  );
};

const FlashMessages = connect(mapStateToProps)(withNamespaces()(PureFlashMessages));

export { PureFlashMessages };
export default FlashMessages;
