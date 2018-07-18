// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { translate, type TranslatorProps } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Card, Button } from 'semantic-ui-react';

import { InvalidArgumentError } from 'errors';
import UserForm, { type UserFormValues } from 'forms/UserForm';

import actions from '../../actions';

type DispatchProps = {|
  onUserFormSubmit: (values: UserFormValues) => void,
|};

type Props = {| ...TranslatorProps, ...DispatchProps |};

const mapDispatchToProps = (dispatch: Dispatch<*>): DispatchProps => {
  return {
    onUserFormSubmit: (values: UserFormValues): void => {
      if (
        values.email == null
        || values.firstName == null
        || values.password == null
        || values.tosAccepted == null
      ) {
        // Make flow happy; #TODO replace with proper redux-form validation
        throw new InvalidArgumentError(`Form data incomplete`);
      }
      dispatch(actions.signup(
        values.email,
        values.firstName,
        values.lastName,
        values.password,
        values.tosAccepted,
      ));
    },
  };
};

const PureSignupCard = (props: Props): React.Node => {
  const { t, onUserFormSubmit } = props;

  return (
    <Card fluid={true}>
      <Card.Content>
        <Card.Header>
          {t('platform:signupCard.title')}
        </Card.Header>
        <Card.Description>
          {t('platform:signupCard.description')}
        </Card.Description>
      </Card.Content>
      <Card.Content>
        <UserForm onSubmit={onUserFormSubmit}>
          <Button.Group fluid={true}>
            <Button secondary={true} as={Link} to="/auth/signin">
              {t('platform:signupCard.link.signin')}
            </Button>
            <Button primary={true} type="submit">
              {t('platform:signupCard.button.submit')}
            </Button>
          </Button.Group>
        </UserForm>
      </Card.Content>
    </Card>
  );
};

const SigninCard = connect(null, mapDispatchToProps)(translate()(PureSignupCard));

export { PureSignupCard };
export default SigninCard;
