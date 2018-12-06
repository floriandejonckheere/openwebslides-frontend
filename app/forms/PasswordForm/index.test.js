// @flow

import * as React from 'react';
import { shallow, mount } from 'enzyme';

import { DummyProviders, dummyProviderProps } from 'lib/testResources';

import PasswordForm, { PurePasswordForm, type PasswordFormValues } from '.';

describe(`PasswordForm`, (): void => {

  let dummyFormProps: PasswordFormValues;

  beforeEach((): void => {
    dummyFormProps = {
      oldPassword: 'abcd1233',
      password: 'abcd1234',
      repeatPassword: 'abcd1234',
    };
  });

  it(`renders without errors`, (): void => {
    const enzymeWrapper = shallow(
      <PurePasswordForm {...dummyProviderProps.translatorProps} />,
    );
    expect(enzymeWrapper.isEmptyRender()).toBe(false);
  });

  it(`renders children`, (): void => {
    const enzymeWrapper = mount(
      <DummyProviders>
        <PasswordForm>
          <p data-test-id="test-form-children">replacement submit buttons would go here</p>
        </PasswordForm>
      </DummyProviders>,
    );
    expect(enzymeWrapper.find('[data-test-id="test-form-children"]')).toHaveLength(1);
  });

  it(`validates form props`, (): void => {
    const enzymeWrapper = shallow(<PurePasswordForm {...dummyProviderProps.translatorProps} />);
    const validate = enzymeWrapper.instance().validateForm;

    expect(validate(dummyFormProps)).toStrictEqual({});

    expect(validate({ ...dummyFormProps, oldPassword: '' })).toHaveProperty('oldPassword');
    expect(validate({ ...dummyFormProps, oldPassword: 'abcde' })).toHaveProperty('oldPassword');
    expect(validate({ ...dummyFormProps, oldPassword: 'abcdef' })).not.toHaveProperty('oldPassword');

    expect(validate({ ...dummyFormProps, password: '' })).toHaveProperty('password');
    expect(validate({ ...dummyFormProps, password: 'abcde' })).toHaveProperty('password');
    expect(validate({ ...dummyFormProps, password: 'abcdef' })).not.toHaveProperty('password');

    expect(validate({ ...dummyFormProps, oldPassword: 'abcdef', password: 'abcdef' })).toHaveProperty('password');
    expect(validate({ ...dummyFormProps, oldPassword: 'abcdef', password: 'abcdeg' })).not.toHaveProperty('password');

    expect(validate({ ...dummyFormProps, password: 'abcdef', repeatPassword: 'abcdeg' })).toHaveProperty('repeatPassword');
    expect(validate({ ...dummyFormProps, password: 'abcdef', repeatPassword: 'abcdef' })).not.toHaveProperty('repeatPassword');
  });

});
