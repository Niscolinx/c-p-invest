import Dashboard from './views/Dashboard'
import UserProfile from './views/UserProfile'
import TableList from './views/TableList'
import Typography from './views/Typography'
import Icons from './views/Icons'
import Maps from './views/Maps'
import Notifications from './views/Notifications'
import Upgrade from './views/Upgrade'
import Plans from './views/Plans'
import planOrder from './views/PlanOrder'

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
        path: '/plans',
        name: 'Invest Now',
        icon: 'pe-7s-note2',
        component: Plans,
        layout: '/admin',
    },
   
    {
        path: '/table',
        name: 'Investment History',
        icon: 'pe-7s-note2',
        component: TableList,
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

export const contentRoutes = [
    {
        path: '/plan/order',
        name: 'Order plan',
        icon: 'pe-7s-map-marker',
        component: planOrder,
        layout: '/admin',
    },
]
