// @flow

const users = {
  user: 'User',
  headings: {
    profile: 'Profile',
  },
  forms: {
    email: 'Email',
    emailDisabled: 'Email (you cannot change this)',
    name: 'Name',
    currentPassword: 'Current password',
    password: 'Password',
    repeatPassword: 'Repeat your password',
    tosDescription: 'To use the service, you must agree to and comply with the <0>Terms of Service</0>',
    tos: 'I agree to the Terms of Service',
    locale: 'Language',
    alertEmails: 'Send me important email notifications',
    errors: {
      email: 'Email must be valid',
      password: 'Password must be longer than 6 characters',
      equalNewPassword: 'New password must be different from current password',
      repeatPassword: 'Passwords must match',
      resetPasswordToken: 'Reset password token is invalid',
      name: 'Name cannot be empty',
      tosAccepted: 'You must accept the Terms of Service',
      locale: 'Language must be valid',
      alertEmails: 'Email notifications must be true or false',
    },
  },
};

export default users;
