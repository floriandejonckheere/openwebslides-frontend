// @flow

const users = {
  user: 'User',
  headings: {
    profile: 'Profile',
  },
  actions: {
    signOut: 'Sign out',
    profile: 'My profile',
    settings: 'Settings',
  },
  forms: {
    email: 'Email',
    emailDisabled: 'Email (you cannot change this)',
    name: 'Name',
    oldPassword: 'Old password',
    password: 'Password',
    repeatPassword: 'Repeat your password',
    tosDescription: 'To use the service, you must agree to and comply with the <0>Terms of Service</0>',
    tos: 'I agree to the Terms of Service',
    locale: 'Language',
    alertEmails: 'Send me important email notifications',
    errors: {
      email: 'Email cannot be empty',
      oldPassword: 'Old password must be longer than 6 characters',
      password: 'Password must be longer than 6 characters',
      repeatPassword: 'Passwords must match',
      resetPasswordToken: 'Reset password token is invalid',
      name: 'Name cannot be empty',
      tosAccepted: 'You must accept the Terms of Service',
      locale: 'Language must be one of the following: {{locales}}',
      alertEmails: 'Email notifications must be true or false',
    },
  },
};

export default users;
