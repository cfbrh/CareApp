const routes = [
    {
        path: '/',
        component: Layout,
        name: 'main',
        children: [
            {
                path: 'dashboard',
                meta: { id: '1', name: 'control', icon: 'Platform', path: '/dashboard', describe: 'display statistics data, statistics table and realtime data'},
                component: Dashboard
            },
            {
                path: 'auth',
                meta: { id: '2', name: 'authority', icon: 'Grid'},
                children: [
                    {
                        path: '',
                        alias: ['admin'],
                        meta: { id: '1', name: 'account', icon: 'Avatar', path: '/auth/admin', describe: 'super account can modify and new auth will be available after log out.'},
                        component: Admin
                    },
                    {
                        path: 'group',
                        meta: { id: '2', name: 'menu', icon: 'Menu', path: '/auth/group', describe: 'menu maps with a control way and menu will be from the rule.'},
                        component: Group
                    }
                ]
            },
            {
                path: 'care',
                meta: { id: '3', name: 'CareApp', icon: 'BellFilled'},
                children:[
                    {
                        path: '',
                        alias: ['staff'],
                        meta: { id: '1', name: 'care', icon: 'Checked', path: '/care/staff', describe: 'care people can create and modify client choice'},
                        component: Staff
                    },
                    {
                        path: 'order',
                        meta: { id: '2', name: 'order', icon: 'List', path: '/care/order', describe: 'client choice can be viewed and order with completed payment can be modified to care'},
                        component: Order
                    }
                ]
            }
        ]
    },
    {
        path: '/login',
        component: Login
    }
]