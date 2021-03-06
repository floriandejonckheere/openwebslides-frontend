// @flow

const topics = {
  topic: 'topic',
  props: {
    title: 'Title',
    description: 'Description',
    noDescription: 'No description',
    timestamp: 'Last updated {{timestamp}}',
    access: {
      title: 'Access level',
      accessForType: {
        'topics/PUBLIC': 'Public',
        'topics/PROTECTED': 'Protected',
        'topics/PRIVATE': 'Private',
      },
      accessDescriptionForType: {
        'topics/PUBLIC': 'Public topics are visible for everyone on the internet',
        'topics/PROTECTED': 'Protected topics require users to be signed in on the platform to view it',
        'topics/PRIVATE': 'Private topics are only visible for the topic owner and the collaborators',
      },
    },
  },
  forms: {
    title: 'Title',
    description: 'Description',
    message: 'Message',
    errors: {
      title: {
        empty: 'Title cannot be empty',
        length: 'Title cannot be longer than 100 characters',
      },
      description: {
        empty: 'Description cannot be empty',
        length: 'Description cannot be longer than 200 characters',
      },
      message: {
        empty: 'Message cannot be empty',
        length: 'Message must be between 5 and 60 characters',
      },
      access: 'Access must be valid',
    },
  },
  modals: {
    unsavedChanges: {
      message: 'You have unsaved changes, are you sure you wish to discard these changes and leave?',
    },
  },
  sidebars: {
    topicInfo: {
      header: 'Topic Info',
      forkedFrom: 'Copied from ',
    },
    slidePreviews: {
      header: 'Slide Previews',
    },
    contribute: {
      header: 'Contribute',
      sendUpdates: {
        info: 'You can send updates back to <0>{{upstreamTopicTitle}}</0>. The topic owner and collaborators will be able to see the updates you\'ve sent, and after reviewing, these changes can be integrated in <0>{{upstreamTopicTitle}}</0>. You can check back here on the status of your contribution.',
        count: 'This contribution will include {{count}} updates.',
        saveChanges: 'Please save your changes first',
        pullRequestOpen: 'You have already sent back updates. Please wait until they are accepted or rejected, before sending back more updates',
      },
      outgoing: {
        title: 'Outgoing contributions',
        message: 'You have sent the following updates',
        empty: 'You have not sent any updates back to <0>{{upstreamTopicTitle}}</0>',
      },
      incoming: {
        description: 'Updates sent back to this topic are shown here. You will be able to see the updates and the message accompanying the updates. After reviewing, these changes will be integrated in the topic.',
        title: 'Incoming contributions',
        message: 'The following updates were sent to this topic',
        empty: 'No updates were sent back yet',
      },
    },
  },
  newTopicCard: {
    title: 'Create a new topic',
    description: 'Please fill out the following info to create new topic.',
  },
};

export default topics;
