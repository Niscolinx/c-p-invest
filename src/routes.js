import Dashboard from './views/Dashboard'
import UserProfile from './views/UserProfile'
import InvestmentHistory from './views/InvestmentHistory'
import Typography from './views/Typography'
import Icons from './views/Icons'
import Maps from './views/Maps'
import Notifications from './views/Notifications'
import Upgrade from './views/Upgrade'
import PlansDashboard from './views/PlansDashboard'

export const dashboardRoutes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        icon: 'pe-7s-graph',
        component: Dashboard,
        layout: '/admin',
    },

    {
        path: '/user',
        name: 'User Profile',
        icon: 'pe-7s-user',
        component: UserProfile,
        layout: '/admin',
    },
    {
        path: '/plansDashboard',
        name: 'Invest Now',
        icon: 'pe-7s-note2',
        component: PlansDashboard,
        layout: '/admin',
    },
   
    {
        path: '/table',
        name: 'Investment History',
        icon: 'pe-7s-note2',
        component: InvestmentHistory,
        layout: '/admin',
    },
    {
        path: '/typography',
        name: 'Typography',
        icon: 'pe-7s-news-paper',
        component: Typography,
        layout: '/admin',
    },
    {
        path: '/icons',
        name: 'Icons',
        icon: 'pe-7s-science',
        component: Icons,
        layout: '/admin',
    },
    {
        path: '/maps',
        name: 'Maps',
        icon: 'pe-7s-map-marker',
        component: Maps,
        layout: '/admin',
    },
    {
        path: '/notifications',
        name: 'Notifications',
        icon: 'pe-7s-bell',
        component: Notifications,
        layout: '/admin',
    },
    {
        upgrade: true,
        path: '/upgrade',
        name: 'Upgrade to PRO',
        icon: 'pe-7s-rocket',
        component: Upgrade,
        layout: '/admin',
    },

]
