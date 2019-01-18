// @flow

import _ from 'lodash';
import * as React from 'react';
import { mount, shallow } from 'enzyme';

import { DummyProviders, dummyProviderProps, dummyPullRequestData, dummyTopicData, dummyUserData, dummyInitialState } from 'lib/testResources';
import topics from 'modules/topics';
import users from 'modules/users';

import actions from '../../actions';
import * as m from '../../model';

import View, { PureView } from '.';

describe(`PullRequests`, (): void => {

  let dummyPullRequest: m.PullRequest;
  let dummyPullRequestsById: m.PullRequestsById;
  let dummyTopic: topics.model.Topic;
  let dummyUser: users.model.User;
  let dummyState: any;
  let dummyDispatch: any;

  beforeEach((): void => {
    dummyPullRequest = dummyPullRequestData.pullRequest;
    dummyPullRequestsById = {
      [dummyPullRequest.id]: dummyPullRequest,
    };
    dummyTopic = dummyTopicData.topic;
    dummyUser = dummyUserData.user;
    dummyState = {
      ...dummyInitialState,
      modules: {
        ...dummyInitialState.modules,
        pullRequests: {
          ...dummyInitialState.modules.pullRequests,
          byId: dummyPullRequestsById,
        },
        topics: {
          ...dummyInitialState.modules.topics,
          byId: {
            [dummyPullRequest.sourceTopicId]: dummyTopic,
            [dummyPullRequest.targetTopicId]: dummyTopic,
          },
        },
        users: {
          ...dummyInitialState.modules.users,
          byId: {
            [dummyPullRequest.userId]: dummyUser,
          },
        },
      },
    };
    dummyDispatch = jest.fn();
  });

  it(`renders without errors`, (): void => {
    const enzymeWrapper = shallow(
      <PureView
        {...dummyProviderProps.translatorProps}
        pullRequestId={dummyPullRequest.id}
      />,
    );
    expect(enzymeWrapper.isEmptyRender()).toBe(false);
  });

  it(`loads the pull request, when the pull request was not previously present in the state`, (): void => {
    _.unset(dummyPullRequestsById, dummyPullRequest.id);

    const enzymeWrapper = mount(
      <DummyProviders dummyState={dummyState} dummyDispatch={dummyDispatch}>
        <View pullRequestId={dummyPullRequest.id} />
      </DummyProviders>,
    );

    expect(dummyDispatch).toHaveBeenCalledWith(actions.fetch(dummyPullRequest.id));
    expect(enzymeWrapper.find('[data-test-id="pull-request-view"]').hostNodes()).toHaveLength(0);
  });

  it(`renders the pull request view, when the pull request was previously present in the state`, (): void => {
    const enzymeWrapper = mount(
      <DummyProviders dummyState={dummyState} dummyDispatch={dummyDispatch}>
        <View pullRequestId={dummyPullRequest.id} />
      </DummyProviders>,
    );

    expect(dummyDispatch).toHaveBeenCalledTimes(0);
    expect(enzymeWrapper.find('[data-test-id="pull-request-view"]').hostNodes()).toHaveLength(1);
  });

  it(`renders the pull request message`, (): void => {
    const enzymeWrapper = mount(
      <DummyProviders dummyState={dummyState} dummyDispatch={dummyDispatch}>
        <View pullRequestId={dummyPullRequest.id} />
      </DummyProviders>,
    );

    expect(enzymeWrapper.find('[data-test-id="pull-request-view-message"]').hostNodes().html()).toContain(dummyPullRequest.message);
  });

  describe(`renders the correct ribbon`, (): void => {

    it(`renders a question on pending pull request`, (): void => {
      _.set(dummyPullRequest, 'state', m.pullRequestStates.PENDING);

      const enzymeWrapper = mount(
        <DummyProviders dummyState={dummyState} dummyDispatch={dummyDispatch}>
          <View pullRequestId={dummyPullRequest.id} />
        </DummyProviders>,
      );

      expect(enzymeWrapper.find('Icon').props().name).toStrictEqual('question circle');
    });

    it(`renders a question on ready pull request`, (): void => {
      _.set(dummyPullRequest, 'state', m.pullRequestStates.READY);

      const enzymeWrapper = mount(
        <DummyProviders dummyState={dummyState} dummyDispatch={dummyDispatch}>
          <View pullRequestId={dummyPullRequest.id} />
        </DummyProviders>,
      );

      expect(enzymeWrapper.find('Icon').props().name).toStrictEqual('question circle');
    });

    it(`renders a question on working pull request`, (): void => {
      _.set(dummyPullRequest, 'state', m.pullRequestStates.WORKING);

      const enzymeWrapper = mount(
        <DummyProviders dummyState={dummyState} dummyDispatch={dummyDispatch}>
          <View pullRequestId={dummyPullRequest.id} />
        </DummyProviders>,
      );

      expect(enzymeWrapper.find('Icon').props().name).toStrictEqual('question circle');
    });

    it(`renders an exclamation on incompatible pull request`, (): void => {
      _.set(dummyPullRequest, 'state', m.pullRequestStates.INCOMPATIBLE);

      const enzymeWrapper = mount(
        <DummyProviders dummyState={dummyState} dummyDispatch={dummyDispatch}>
          <View pullRequestId={dummyPullRequest.id} />
        </DummyProviders>,
      );

      expect(enzymeWrapper.find('Icon').props().name).toStrictEqual('exclamation circle');
    });

    it(`renders a check on accepted pull request`, (): void => {
      _.set(dummyPullRequest, 'state', m.pullRequestStates.ACCEPTED);

      const enzymeWrapper = mount(
        <DummyProviders dummyState={dummyState} dummyDispatch={dummyDispatch}>
          <View pullRequestId={dummyPullRequest.id} />
        </DummyProviders>,
      );

      expect(enzymeWrapper.find('Icon').props().name).toStrictEqual('check');
    });

    it(`renders a times on rejected pull request`, (): void => {
      _.set(dummyPullRequest, 'state', m.pullRequestStates.REJECTED);

      const enzymeWrapper = mount(
        <DummyProviders dummyState={dummyState} dummyDispatch={dummyDispatch}>
          <View pullRequestId={dummyPullRequest.id} />
        </DummyProviders>,
      );

      expect(enzymeWrapper.find('Icon').props().name).toStrictEqual('times');
    });

    it(`renders a send on unknown state`, (): void => {
      _.set(dummyPullRequest, 'state', null);

      const enzymeWrapper = mount(
        <DummyProviders dummyState={dummyState} dummyDispatch={dummyDispatch}>
          <View pullRequestId={dummyPullRequest.id} />
        </DummyProviders>,
      );

      expect(enzymeWrapper.find('Icon').props().name).toStrictEqual('send');
    });

  });

  it(`renders a submit comment`, (): void => {
    const enzymeWrapper = mount(
      <DummyProviders dummyState={dummyState} dummyDispatch={dummyDispatch}>
        <View pullRequestId={dummyPullRequest.id} />
      </DummyProviders>,
    );

    expect(enzymeWrapper.find('PureSubmitComment')).toHaveLength(1);
  });

});
