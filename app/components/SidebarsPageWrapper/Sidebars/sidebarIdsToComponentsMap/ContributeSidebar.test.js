// @flow

import * as React from 'react';
import { shallow } from 'enzyme';

import { dummyTopicData as dummyData } from 'lib/testResources';
import topics from 'modules/topics';

import { PureContributeSidebar } from './ContributeSidebar';

describe(`ContributeSidebar`, (): void => {

  let dummyTopic: topics.model.Topic;

  beforeEach((): void => {
    dummyTopic = { ...dummyData.topic };
  });

  it(`renders without errors`, (): void => {
    const enzymeWrapper = shallow(
      <PureContributeSidebar topic={dummyTopic} />,
    );
    expect(enzymeWrapper.isEmptyRender()).toBe(false);
  });

});
