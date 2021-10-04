import Router from 'vue-router'
import Home from '@/components/Home'
import workshopslist from '@/components/workshopslist'

const router = new Router(
    {
        mode: 'history',
        routes: [
            {
                name: 'Home',
                path: '/',
                component: Home
            },
        {
                name: 'workshopsList',
                path: '/workshops',
                component: workshopslist
            }

        ]

    }
)
export default router