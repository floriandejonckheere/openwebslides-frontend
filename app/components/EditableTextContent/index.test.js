// @flow

import * as React from 'react';
import { mount, shallow } from 'enzyme';

import EditableTextContent from '.';

describe(`EditableTextContent`, (): void => {

  let dummyText: string;
  let dummyInput: any;
  let dummyActivate: any;
  let dummyDeactivate: any;
  let dummyKeyDown: any;
  let textSelector: string;
  let inputSelector: string;

  beforeEach((): void => {
    dummyText = 'Lorem ipsum dolor sit amet.';
    dummyInput = jest.fn();
    dummyActivate = jest.fn();
    dummyDeactivate = jest.fn();
    dummyKeyDown = jest.fn();
    textSelector = `[data-test-id="editable-text-content__text"]`;
    // Using [data-test-id="editable-text-content__input"] as a selector won't work if the element
    // is in singleline mode because Semantic UI wraps the <input> element in a <div>.
    // Selecting the element that has an [onBlur] attribute seems like a good way to make sure
    // the form element itself is selected, and works for both <input> and <textarea>. #TODO
    inputSelector = '[onBlur]';
  });

  it(`renders without errors`, (): void => {
    const enzymeWrapper = shallow(
      <EditableTextContent
        initialText={dummyText}
      />,
    );
    expect(enzymeWrapper.isEmptyRender()).toBe(false);
  });

  it(`renders its text prop`, (): void => {
    const enzymeWrapper = mount(
      <EditableTextContent
        initialText={dummyText}
      />,
    );
    expect(enzymeWrapper.text()).toContain(dummyText);
  });

  it(`renders itself in text mode, when it has not been interacted with yet`, (): void => {
    const enzymeWrapper = mount(
      <EditableTextContent initialText={dummyText} />,
    );
    expect(enzymeWrapper.find(textSelector).hostNodes()).toHaveLength(1);
    expect(enzymeWrapper.find(inputSelector).hostNodes()).toHaveLength(0);
  });

  it(`renders itself in input mode, when it is in text mode and receives a click event`, (): void => {
    const enzymeWrapper = mount(
      <EditableTextContent initialText={dummyText} />,
    );
    enzymeWrapper.find(textSelector).hostNodes().simulate('click');
    expect(enzymeWrapper.find(textSelector).hostNodes()).toHaveLength(0);
    expect(enzymeWrapper.find(inputSelector).hostNodes()).toHaveLength(1);
  });

  it(`renders itself in input mode, when it is in text mode and receives a focus event`, (): void => {
    const enzymeWrapper = mount(
      <EditableTextContent initialText={dummyText} />,
    );
    enzymeWrapper.find(textSelector).hostNodes().simulate('focus');
    expect(enzymeWrapper.find(textSelector).hostNodes()).toHaveLength(0);
    expect(enzymeWrapper.find(inputSelector).hostNodes()).toHaveLength(1);
  });

  it(`renders itself in text mode, when it is in singleline input mode and receives a blur event`, (): void => {
    const enzymeWrapper = mount(
      <EditableTextContent initialText={dummyText} />,
    );
    enzymeWrapper.find(textSelector).hostNodes().simulate('focus');
    enzymeWrapper.find(inputSelector).hostNodes().simulate('blur');
    expect(enzymeWrapper.find(textSelector).hostNodes()).toHaveLength(1);
    expect(enzymeWrapper.find(inputSelector).hostNodes()).toHaveLength(0);
  });

  it(`renders itself in text mode, when it is in multiline input mode and receives a blur event`, (): void => {
    const enzymeWrapper = mount(
      <EditableTextContent initialText={dummyText} multiline={true} />,
    );
    enzymeWrapper.find(textSelector).hostNodes().simulate('focus');
    enzymeWrapper.find(inputSelector).hostNodes().simulate('blur');
    expect(enzymeWrapper.find(textSelector).hostNodes()).toHaveLength(1);
    expect(enzymeWrapper.find(inputSelector).hostNodes()).toHaveLength(0);
  });

  it(`rerenders itself, when it is in input mode and receives an input event`, (): void => {
    const enzymeWrapper = mount(
      <EditableTextContent initialText={dummyText} />,
    );
    enzymeWrapper.find(textSelector).hostNodes().simulate('focus');

    const renderSpy = jest.spyOn(enzymeWrapper.instance(), 'render');
    enzymeWrapper.find(inputSelector).hostNodes().simulate('input');
    expect(renderSpy).toHaveBeenCalledTimes(1);
  });

  it(`calls the passed onActivate function, when it is in text mode and receives a click event`, (): void => {
    const enzymeWrapper = mount(
      <EditableTextContent initialText={dummyText} onActivate={dummyActivate} />,
    );
    enzymeWrapper.find(textSelector).hostNodes().simulate('click');
    expect(dummyActivate).toHaveBeenCalled();
  });

  it(`calls the passed onActivate function, when it is in text mode and receives a focus event`, (): void => {
    const enzymeWrapper = mount(
      <EditableTextContent initialText={dummyText} onActivate={dummyActivate} />,
    );
    enzymeWrapper.find(textSelector).hostNodes().simulate('focus');
    expect(dummyActivate).toHaveBeenCalled();
  });

  it(`calls the passed onDeactivate function, when it is in input mode and receives a blur event`, (): void => {
    const enzymeWrapper = mount(
      <EditableTextContent initialText={dummyText} onDeactivate={dummyDeactivate} />,
    );
    enzymeWrapper.find(textSelector).hostNodes().simulate('focus');
    enzymeWrapper.find(inputSelector).hostNodes().simulate('blur');
    expect(dummyDeactivate).toHaveBeenCalledWith(dummyText);
  });

  it(`calls the passed onInput function, when it is in input mode and receives an input event`, (): void => {
    const enzymeWrapper = mount(
      <EditableTextContent initialText={dummyText} onInput={dummyInput} />,
    );
    enzymeWrapper.find(textSelector).hostNodes().simulate('focus');
    enzymeWrapper.find(inputSelector).hostNodes().simulate('input');
    expect(dummyInput).toHaveBeenCalledWith(dummyText);
  });

  it(`calls the passed onKeyDown function, when it is in input mode and receives a keyDown event`, (): void => {
    const dummyKeyDownEvent = {
      key: 'a',
      ctrlKey: false,
      shiftKey: false,
      altKey: false,
    };
    const enzymeWrapper = mount(
      <EditableTextContent initialText={dummyText} onKeyDown={dummyKeyDown} />,
    );
    enzymeWrapper.find(textSelector).hostNodes().simulate('focus');
    enzymeWrapper.find(inputSelector).hostNodes().simulate('keyDown', dummyKeyDownEvent);
    expect(dummyKeyDown).toHaveBeenCalled();
  });

  // eslint-disable-next-line jest/expect-expect
  it(`doesn't do anything, when there is no passed onKeyDown function and it is in input mode and receives a keyDown event`, (): void => {
    // Pointless but needed for 100% coverage...
    const enzymeWrapper = mount(
      <EditableTextContent initialText={dummyText} />,
    );
    enzymeWrapper.find(textSelector).hostNodes().simulate('focus');
    enzymeWrapper.find(inputSelector).hostNodes().simulate('keyDown');
  });

  describe(`getDerivedStateFromProps`, (): void => {

    it(`returns an object containing the new text and initialText, when the new initialText prop is different from the previous one`, (): void => {
      const dummyNewText = `${dummyText}${dummyText}`;
      const dummyPrevState = {
        initialIsActive: false,
        isActive: false,
        initialText: dummyText,
        text: dummyText,
      };
      const dummyNextProps = {
        multiline: false,
        initialText: dummyNewText,
        initialIsActive: false,
        onInput: dummyInput,
        onActivate: dummyActivate,
        onDeactivate: dummyDeactivate,
      };
      const result = EditableTextContent.getDerivedStateFromProps(dummyNextProps, dummyPrevState);
      expect(result).toStrictEqual({
        initialText: dummyNewText,
        text: dummyNewText,
      });
    });

    it(`returns an object containing the new isActive and initialIsActive, when the new initialIsActive prop is different from the previous one`, (): void => {
      const dummyPrevState = {
        initialIsActive: false,
        isActive: false,
        initialText: dummyText,
        text: dummyText,
      };
      const dummyNextProps = {
        multiline: false,
        initialText: dummyText,
        initialIsActive: true,
        onInput: dummyInput,
        onActivate: dummyActivate,
        onDeactivate: dummyDeactivate,
      };
      const result = EditableTextContent.getDerivedStateFromProps(dummyNextProps, dummyPrevState);
      expect(result).toStrictEqual({
        initialIsActive: true,
        isActive: true,
      });
    });

    it(`returns an empty object, when the new initialText prop is the same as the previous one and the new intitialIsActive prop is the same as the previous one`, (): void => {
      const dummyPrevState = {
        initialIsActive: false,
        isActive: false,
        initialText: dummyText,
        text: dummyText,
      };
      const dummyNextProps = {
        multiline: false,
        initialText: dummyText,
        initialIsActive: false,
        onInput: dummyInput,
        onActivate: dummyActivate,
        onDeactivate: dummyDeactivate,
      };
      const result = EditableTextContent.getDerivedStateFromProps(dummyNextProps, dummyPrevState);
      expect(result).toStrictEqual({});
    });

  });

});
