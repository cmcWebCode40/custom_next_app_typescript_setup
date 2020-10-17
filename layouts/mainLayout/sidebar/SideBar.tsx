import React, { useState } from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from '@material-ui/core/';

import {
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  // People as PeopleIcon,
  TrackChanges,
  Motorcycle as MotorcyleIcon,
  Layers as LayersIcon,
  Assignment as AssignmentIcon
} from '@material-ui/icons/';
import Link from 'next/link';

const UserNavBar = [
  {
    icon: <DashboardIcon />,
    title: <ListItemText primary="Dashboard" />,
    link: '/',
    id: 1
  },
  {
    icon: <MotorcyleIcon />,
    title: <ListItemText primary="New Request" />,
    link: '/deliveryrequest',
    id: 2
  },
  {
    icon: <TrackChanges />,
    title: <ListItemText primary="Track Item" />,
    link: '/track-item',
    id: 3
  },
  {
    icon: <PersonIcon />,
    title: <ListItemText primary="Profile" />,
    link: '/',
    id: 4
  }
];
const AdminNavBar = [
  {
    icon: <DashboardIcon />,
    title: <ListItemText primary="Dashboard" />,
    link: '/',
    id: 1
  },
  {
    icon: <MotorcyleIcon />,
    title: <ListItemText primary="New Request" />,
    link: '/',
    id: 2
  },
  {
    icon: <TrackChanges />,
    title: <ListItemText primary="Track Item" />,
    link: '/',
    id: 3
  },
  {
    icon: <PersonIcon />,
    title: <ListItemText primary="Profile" />,
    link: '/',
    id: 4
  }
];
const VendorNavBar = [
  {
    icon: <DashboardIcon />,
    title: <ListItemText primary="Dashboard" />,
    link: '/signup',
    id: 1
  },
  {
    icon: <MotorcyleIcon />,
    title: <ListItemText primary="New Request" />,
    link: '/',
    id: 2
  },
  {
    icon: <LayersIcon />,
    title: <ListItemText primary="Integrations" />,
    link: '/',
    id: 3
  },
  {
    icon: <PersonIcon />,
    title: <ListItemText primary="Profile" />,
    link: '/',
    id: 4
  }
];

// interface RoleProps {
//   icon: JSX.Element;
//   title: JSX.Element;
//   link: string;
//   id: number;
// }
// [];

export const MainListItems = () => {
  const [role] = useState<string>('User');

  const getRole = (role: string) => {
    switch (role) {
      case 'User':
        return UserNavBar;
      case 'Vendor':
        return VendorNavBar;
      case 'Admin':
        return AdminNavBar;
      default:
        return [];
    }
  };

  return (
    <div>
      {getRole(role).map((nav) => (
        <Link href={nav.link} key={nav.id}>
          <ListItem button>
            <ListItemIcon>{nav.icon}</ListItemIcon>
            {nav.title}
          </ListItem>
        </Link>
      ))}
    </div>
  );
};

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
