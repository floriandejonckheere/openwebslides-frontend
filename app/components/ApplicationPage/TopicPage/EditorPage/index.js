// @flow

import * as React from 'react';
import { translate, type TranslatorProps } from 'react-i18next';
import { Link, Route, Switch, type ContextRouter as RouterProps } from 'react-router-dom';

import ContainerPage from 'core-components/ContainerPage';
import SidebarsPage from 'core-components/SidebarsPage';
import platform from 'modules/platform';
import topics from 'modules/topics';

type Props = {|
  ...TranslatorProps,
  ...RouterProps,
|};

const AuthWrapper = platform.components.AuthWrapper;
const TopicEditor = topics.components.Editor;

const PureTopicEditorForId = (props: Props): React.Node => {
  const { match } = props;

  const topicId = match.params.id;
  if (topicId == null) { // Null check necessary for flow
    return null;
  }

  return (
    <SidebarsPage topicId={topicId}>
      <TopicEditor topicId={topicId} />
    </SidebarsPage>
  );
};

const TopicEditorForId = PureTopicEditorForId;

const DummyContent = (props: Props): React.Node => {
  const { match } = props;

  return (
    <ContainerPage>
      <h1>Dummy topic links:</h1>
      <ul>
        <li><Link to={`${match.url}/feeyhnd0w0`}>Test topic 1</Link></li>
        <li><Link to={`${match.url}/exrhrl5gvy`}>Test topic 2</Link></li>
      </ul>
    </ContainerPage>
  );
};

const PureEditorPage = (props: Props): React.Node => {
  const { match } = props;

  return (
    <AuthWrapper>
      <Switch>
        <Route path={`${match.url}/:id`} component={TopicEditorForId} />
        <Route component={DummyContent} />
      </Switch>
    </AuthWrapper>
  );
};

const EditorPage = translate()(PureEditorPage);

export { PureEditorPage };
export default EditorPage;