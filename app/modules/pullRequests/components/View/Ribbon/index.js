// @flow

import * as React from 'react';
import { withNamespaces, type TranslatorProps } from 'react-i18next';
import { Icon, Label } from 'semantic-ui-react';

import * as m from '../../../model';

type PassedProps = {|
  pullRequest: m.PullRequest,
|};

type Props = {| ...TranslatorProps, ...PassedProps |};

const PureRibbon = (props: Props): React.Node => {
  const { t, pullRequest } = props;

  let icon: string = 'send';
  let color: string = 'yellow';

  switch (pullRequest.state) {
    case m.pullRequestStates.PENDING:
    case m.pullRequestStates.READY:
    case m.pullRequestStates.WORKING:
      icon = 'question circle';
      color = 'yellow';
      break;
    case m.pullRequestStates.INCOMPATIBLE:
      icon = 'exclamation circle';
      color = 'red';
      break;
    case m.pullRequestStates.ACCEPTED:
      icon = 'check';
      color = 'green';
      break;
    case m.pullRequestStates.REJECTED:
      icon = 'times';
      color = 'red';
      break;
    default:
      break;
  }

  // TODO: find out why the ribbon does not attach to the segment
  return (
    <Label ribbon={true} color={color} style={{ left: '-2.1rem' }}>
      <Icon name={icon} /> {t(`pullRequests:ribbonForState.${pullRequest.state}`)}
    </Label>
  );
};

const Ribbon = withNamespaces()(PureRibbon);

export { PureRibbon };
export default Ribbon;
