// @flow

import * as React from 'react';
import { shallow } from 'enzyme';

import { dummyTranslatorProps } from 'config/tests';

import { PureEditor } from '../Editor';

describe(`Editor`, (): void => {

  it(`renders without errors`, (): void => {
    const dummyTopic = {
      id: 'abcdefghij',
      userId: '1234567890',
      title: 'Lorem ipsum',
      description: '',
      rootContentItemId: 'abcdefghij',
    };
    const dummyOnSaveButtonClick = jest.fn();
    const dummyOnLoadButtonClick = jest.fn();

    const enzymeWrapper = shallow(
      <PureEditor
        {...dummyTranslatorProps}
        topicId="abcdefghij"
        topic={dummyTopic}
        onSaveButtonClick={dummyOnSaveButtonClick}
        onLoadButtonClick={dummyOnLoadButtonClick}
      />,
    );
    expect(enzymeWrapper.isEmptyRender()).toEqual(false);
  });

});
