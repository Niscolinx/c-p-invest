export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Transactions']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Invest',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
      
      {
        _tag: 'CSidebarNavItem',
        name: 'Invest Now',
        to: '/invest-now',
      },
     
      {
        _tag: 'CSidebarNavItem',
        name: 'investment History',
        to: '/base/tables',
      },
    ],
  },
  
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Withdrawal',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
      
      {
        _tag: 'CSidebarNavItem',
        name: 'Withdraw Now',
        to: '/base/forms',
      },
     
      {
        _tag: 'CSidebarNavItem',
        name: 'Withdrawal History',
        to: '/base/tables',
      },
    ],
  },
  
  
  
  {
    _tag: 'CSidebarNavItem',
    name: 'Widgets',
    to: '/widgets',
    icon: 'cil-calculator',
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _tag: 'CSidebarNavDivider'
  },

 
 
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Labels']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Label danger',
    to: '',
    icon: {
      name: 'cil-star',
      className: 'text-danger'
    },
    label: true
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Label info',
    to: '',
    icon: {
      name: 'cil-star',
      className: 'text-info'
    },
    label: true
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Label warning',
    to: '',
    icon: {
      name: 'cil-star',
      className: 'text-warning'
    },
    label: true
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

