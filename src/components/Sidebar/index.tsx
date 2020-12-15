import React, { useState } from 'react';
import Link from 'next/link';
import { RoutesList } from '@/helpers/constants';
import { Route } from '@/interfaces';

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import ListIcon from '@material-ui/icons/List';
import List from '@material-ui/core/List';
import clsx from 'clsx';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useStyles, Wrapper, StyledPaper } from './siderbar.styles';

const SIDEBAR_DIRECTION = `left`;

const Sidebar = (): JSX.Element => {
  const classes = useStyles();
  const [open, setOpen] = useState({
    left: false,
  });

  const toggleDrawer = (anchor: string, shouldOpen: boolean) => (event) => {
    if (
      event.type === `keydown` &&
      (event.key === `Tab` || event.key === `Shift`)
    ) {
      return;
    }
    setOpen({ ...open, [anchor]: shouldOpen });
  };

  const list = (anchor: string): JSX.Element => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === `top` || anchor === `bottom`,
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {RoutesList.map((item: Route) => (
          <Link href={item.destination} key={item.route}>
            <ListItem button>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.route} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <Wrapper>
      <label htmlFor="openSidebar">
        <Button
          onClick={toggleDrawer(SIDEBAR_DIRECTION, true)}
          variant="contained"
          color="secondary"
          id="openSidebar"
        >
          <ListIcon />
        </Button>
      </label>

      <Drawer
        anchor={SIDEBAR_DIRECTION}
        open={open[SIDEBAR_DIRECTION]}
        onClose={toggleDrawer(SIDEBAR_DIRECTION, false)}
        PaperProps={{ component: StyledPaper }}
      >
        {list(SIDEBAR_DIRECTION)}
      </Drawer>
    </Wrapper>
  );
};

export default Sidebar;
