// @flow

import * as React from 'react';
import { translate } from 'react-i18next';
import type { CustomTranslatorProps } from 'types/translator';

import { Card } from 'semantic-ui-react';

import SignupForm from './forms/SignupForm';

type Props = CustomTranslatorProps;

const PureSignupCard = (props: Props): React.Node => {
  const { t } = props;

  return (
    <Card fluid={true}>
      <Card.Content>
        <Card.Header>
          {t('authentication:signup.title')}
        </Card.Header>
        <Card.Description>
          {t('authentication:signup.description')}
        </Card.Description>
      </Card.Content>
      <Card.Content>
        <SignupForm />
      </Card.Content>
    </Card>
  );
};

const SigninCard = translate()(PureSignupCard);

export { PureSignupCard };
export default SigninCard;
