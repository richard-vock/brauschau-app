import HomeIcon from '@mui/icons-material/Home';
import BeerIcon from '@mui/icons-material/SportsBar';
import SponsorIcon from '@mui/icons-material/Handshake';

import asyncComponentLoader from '@/utils/loader';

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.Welcome]: {
    component: asyncComponentLoader(() => import('@/pages/Welcome')),
    path: '/',
    title: 'Startseite',
    icon: HomeIcon,
  },
  [Pages.Page1]: {
    component: asyncComponentLoader(() => import('@/pages/Biere')),
    path: '/biere',
    title: 'Biere',
    icon: BeerIcon,
  },
  [Pages.Page2]: {
    component: asyncComponentLoader(() => import('@/pages/Sponsoren')),
    path: '/sponsoren',
    title: 'Sponsoren',
    icon: SponsorIcon,
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/pages/NotFound')),
    path: '*',
  },
};

export default routes;
