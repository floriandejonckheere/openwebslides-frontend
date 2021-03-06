// @flow

export const HOME_ROUTE = '/';
// TOPIC
export const TOPIC_ROUTE = '/topic';
export const TOPIC_VIEWER_ROUTE = '/topic/:topicId/viewer';
export const TOPIC_EDITOR_ROUTE = '/topic/:topicId/editor';
export const TOPIC_NEW_ROUTE = '/topic/new';
// PULL REQUEST
export const PULL_REQUEST_ROUTE = '/pullRequest';
export const PULL_REQUEST_VIEW_ROUTE = '/pullRequest/:pullRequestId/view';
// USER
export const USER_ROUTE = '/user';
export const USER_SIGNOUT_ROUTE = '/user/signout';
export const USER_SETTINGS_ROUTE = '/user/settings';
export const USER_PROFILE_ROUTE = '/user/profile';
export const USER_PROFILE_BY_ID_ROUTE = '/user/profile/:userId';
// AUTH
export const AUTH_ROUTE = '/auth';
export const AUTH_SIGNIN_ROUTE = '/auth/signin';
export const AUTH_SIGNUP_ROUTE = '/auth/signup';
export const AUTH_CONFIRM_EMAIL_ROUTE = '/auth/confirmation';
export const AUTH_RESET_PASSWORD_ROUTE = '/auth/password';
export const AUTH_RESEND_CONFIRMATION_EMAIL_ROUTE = '/auth/resend';
export const AUTH_SEND_RESET_PASSWORD_EMAIL_ROUTE = '/auth/reset';
// SSO AUTH
export const AUTH_SSO_CALLBACK = '/auth/sso';
export const AUTH_SSO_GOOGLE = '/oauth/google_oauth2';
export const AUTH_SSO_FACEBOOK = '/oauth/facebook';
export const AUTH_SSO_UGENT = '/oauth/cas';
// DEV
export const DEV_ROUTE = '/dev';
export const DEV_GENERATE_RANDOM_STRING_ROUTE = '/dev/generaterandomstring';
// TOS
export const TOS_ROUTE = '/tos';
