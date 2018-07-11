// @flow

import * as React from 'react';
import { translate } from 'react-i18next';
import { Grid } from 'semantic-ui-react';

import type { CustomTranslatorProps } from 'types/translator';
import FlashMessages from 'core-components/flash/FlashMessages';
import authentication from 'modules/authentication';

import Page from '../../Page';

type Props = CustomTranslatorProps & { /* new props go here */ };

const { SignupCard } = authentication.components;

const PureSignupPage = (props: Props): React.Node => {
  return (
    // $FlowFixMe Can't figure out cause; Page component needs rewriting anyway #TODO
    <Page>
      <Grid centered={true} verticalAlign="middle">
        <Grid.Column width={6}>
          <FlashMessages />

          <SignupCard />
        </Grid.Column>
      </Grid>
    </Page>
  );
};

const SignupPage = translate()(PureSignupPage);

export { PureSignupPage };
export default SignupPage;
