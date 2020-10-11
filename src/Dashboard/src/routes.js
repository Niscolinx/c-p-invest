import React from 'react';

const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const InvestNow = React.lazy(() => import('./views/InvestNow'));

const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));
const Profile = React.lazy(() => import('./views/users/Profile'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/invest-now', name: 'Invest Now', component: InvestNow },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base/forms', name: 'Forms', component: BasicForms },
  
  { path: '/base/tables', name: 'Tables', component: Tables },
 
  
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/profile', exact: true, name: 'Profile', component: Profile }
];

export default routes;
