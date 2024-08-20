
import { createRouter, createWebHashHistory  } from 'vue-router'
import Layout from '../views/Main.vue'
import Login from '../views/login/index.vue'
import Admin from '../views/auth/admin/index.vue'
import Group from '../views/auth/group/index.vue'
import Order from '../views/care/order/index.vue'
import Staff from '../views/care/staff/index.vue'
import Dashboard from '../views/dashboard/index.vue'

const routes = [
    {
        path: '/',
        component: Layout,
        name: 'main',
        children: [
            {
                path: 'dashboard',
                meta: { id: '1', name: 'Console', icon: 'Platform', path: '/dashboard', describe: 'display statistics data, statistics table and realtime data'},
                component: Dashboard
            },
            {
                path: 'auth',
                meta: { id: '2', name: 'Permission Management', icon: 'Grid'},
                children: [
                    {
                        path: '',
                        alias: ['admin'],
                        meta: { id: '2-1', name: 'Account', icon: 'Avatar', path: '/auth/admin', describe: 'super account can modify and new auth will be available after log out.'},
                        component: Admin
                    },
                    {
                        path: 'group',
                        meta: { id: '2-2', name: 'Menu', icon: 'Menu', path: '/auth/group', describe: 'menu maps with a control way and menu will be from the rule.'},
                        component: Group
                    }
                ]
            },
            {
                path: 'care',
                meta: { id: '3', name: 'Patient Escort', icon: 'BellFilled'},
                children:[
                    {
                        path: '',
                        alias: ['staff'],
                        meta: { id: '3-1', name: 'Caregiver', icon: 'Checked', path: '/care/staff', describe: 'care people can create and modify client choice'},
                        component: Staff
                    },
                    {
                        path: 'order',
                        meta: { id: '3-2', name: 'Order', icon: 'List', path: '/care/order', describe: 'client choice can be viewed and order with completed payment can be modified to care'},
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

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router