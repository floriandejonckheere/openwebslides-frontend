// @flow

import * as React from 'react';
import { Rail } from 'semantic-ui-react';
import SidebarMenuItem from './SidebarMenuItem';
import { sidebar } from '../model/sidebarName';

const PureSidebarMenu = (): React.Node => {
  return (
    <Rail position="right" attached={true} className="editor__sidebarmenu">
      <SidebarMenuItem sidebarName={sidebar.INFO} icon="info" />
      <SidebarMenuItem sidebarName={sidebar.SLIDE} icon="image" />
    </Rail>
  );
};

const SidebarMenu = PureSidebarMenu;

export { PureSidebarMenu };
export default SidebarMenu;
