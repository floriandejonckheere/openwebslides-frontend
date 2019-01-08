// @flow

import _ from 'lodash';
import * as React from 'react';
import { mount, shallow } from 'enzyme';

import { DummyProviders, dummyInitialState, dummyProviderProps, dummyTopicData } from 'lib/testResources';

import actions from '../../actions';
import * as m from '../../model';

import Viewer, { PureViewer } from '.';

describe(`Viewer`, (): void => {

  let dummyTopic: m.Topic;
  let upstreamTopic: m.Topic;
  let downstreamTopic: m.Topic;
  let dummyTopicsById: m.TopicsById;
  let dummyState: any;
  let dummyDispatch: any;
  let dummyOnForkTopic: any;

  beforeEach((): void => {
    dummyTopic = { ...dummyTopicData.topic, isContentFetched: true };
    upstreamTopic = { ...dummyTopicData.upstream, isContentFetched: true };
    downstreamTopic = { ...dummyTopicData.downstream, isContentFetched: true };
    dummyTopicsById = {
      [dummyTopic.id]: dummyTopic,
      [upstreamTopic.id]: upstreamTopic,
      [downstreamTopic.id]: downstreamTopic,
    };
    dummyState = {
      ...dummyInitialState,
      modules: {
        ...dummyInitialState.modules,
        topics: {
          ...dummyInitialState.modules.topics,
          byId: dummyTopicsById,
        },
      },
    };
    dummyDispatch = jest.fn();
    dummyOnForkTopic = jest.fn();
  });

  it(`renders without errors`, (): void => {
    const enzymeWrapper = shallow(
      <PureViewer
        {...dummyProviderProps.translatorProps}
        topicId={dummyTopic.id}
        topic={dummyTopic}
        onForkTopic={dummyOnForkTopic}
      />,
    );
    expect(enzymeWrapper.isEmptyRender()).toBe(false);
  });

  it(`loads the topic, when the topic or its content was not previously present in the state`, (): void => {
    _.unset(dummyTopicsById, dummyTopic.id);

    const enzymeWrapper = mount(
      <DummyProviders dummyState={dummyState} dummyDispatch={dummyDispatch}>
        <Viewer topicId={dummyTopic.id} onForkTopic={dummyOnForkTopic} />
      </DummyProviders>,
    );

    expect(dummyDispatch).toHaveBeenCalledWith(actions.fetchWithContent(dummyTopic.id));
    expect(enzymeWrapper.find('[data-test-id="topic-viewer"]').hostNodes()).toHaveLength(0);
  });

  it(`renders the topic viewer, when the topic and its content were previously present in the state`, (): void => {
    const enzymeWrapper = mount(
      <DummyProviders dummyState={dummyState} dummyDispatch={dummyDispatch}>
        <Viewer topicId={dummyTopic.id} onForkTopic={dummyOnForkTopic} />
      </DummyProviders>,
    );

    expect(dummyDispatch).toHaveBeenCalledTimes(0);
    expect(enzymeWrapper.find('[data-test-id="topic-viewer"]').hostNodes()).toHaveLength(1);
  });

  it(`shows the share modal when the share button is clicked`, (): void => {
    const enzymeWrapper = mount(
      <DummyProviders dummyState={dummyState} dummyDispatch={dummyDispatch}>
        <Viewer topicId={dummyTopic.id} />
      </DummyProviders>,
    );

    expect(enzymeWrapper.find('PureShareModal').props().isOpen).toBe(false);
    enzymeWrapper.find('[data-test-id="topic-viewer-share-button"]').hostNodes().simulate('click');
    expect(enzymeWrapper.find('PureShareModal').props().isOpen).toBe(true);
  });

  it(`closes the share modal when the onCancel handler passed to the share modal is called`, (): void => {
    const enzymeWrapper = mount(
      <DummyProviders dummyState={dummyState} dummyDispatch={dummyDispatch}>
        <Viewer topicId={dummyTopic.id} />
      </DummyProviders>,
    );

    const onCancel = enzymeWrapper.find('PureShareModal').props().onCancel;

    expect(enzymeWrapper.find('PureShareModal').props().isOpen).toBe(false);
    enzymeWrapper.find('[data-test-id="topic-viewer-share-button"]').hostNodes().simulate('click');
    expect(enzymeWrapper.find('PureShareModal').props().isOpen).toBe(true);
    onCancel();
    enzymeWrapper.update();
    expect(enzymeWrapper.find('PureShareModal').props().isOpen).toBe(false);
  });

  it(`renders the topic fork button, when the topic does not have an upstream`, (): void => {
    const enzymeWrapper = mount(
      <DummyProviders dummyState={dummyState} dummyDispatch={dummyDispatch}>
        <Viewer topicId={upstreamTopic.id} onForkTopic={dummyOnForkTopic} />
      </DummyProviders>,
    );

    expect(dummyDispatch).toHaveBeenCalledTimes(0);
    expect(enzymeWrapper.find('[data-test-id="topic-viewer-fork-button"]').hostNodes()).toHaveLength(1);
  });

  it(`renders the disabled topic fork button, when the topic has an upstream`, (): void => {
    const enzymeWrapper = mount(
      <DummyProviders dummyState={dummyState} dummyDispatch={dummyDispatch}>
        <Viewer topicId={downstreamTopic.id} onForkTopic={dummyOnForkTopic} />
      </DummyProviders>,
    );

    expect(dummyDispatch).toHaveBeenCalledTimes(0);
    expect(enzymeWrapper.find('[data-test-id="topic-viewer-fork-button"][disabled]').hostNodes()).toHaveLength(1);
  });

  it(`calls the passed onForkTopic function, when the fork button is clicked`, (): void => {
    const enzymeWrapper = mount(
      <DummyProviders dummyState={dummyState} dummyDispatch={dummyDispatch}>
        <Viewer topicId={dummyTopic.id} onForkTopic={dummyOnForkTopic} />
      </DummyProviders>,
    );

    enzymeWrapper.find('[data-test-id="topic-viewer-fork-button"]').hostNodes().simulate('click');
    expect(dummyOnForkTopic).toHaveBeenCalledWith(dummyTopic.id);
  });

});
