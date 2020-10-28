import Dashboard from './views/Dashboard'
import UserProfile from './views/UserProfile'
import InvestmentHistory from './views/InvestmentHistory'
import Withdraw from './views/Withdraw'
import WithdrawalHistory from './views/WithdrawalHistory'
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
        path: '/investmentHistory',
        name: 'Investment History',
        icon: 'pe-7s-refresh',
        component: InvestmentHistory,
        layout: '/admin',
    },
    {
        path: '/withdraw',
        name: 'Withdraw',
        icon: 'pe-7s-news-paper',
        component: Withdraw,
        layout: '/admin',
    },
    {
        path: '/WithdrawalHistory',
        name: 'Withdrawal History',
        icon: 'pe-7s-refresh',
        component: WithdrawalHistory,
        layout: '/admin',
    },
]
