import Router from 'vue-router'
import Home from '@/components/Home'
import workshopslist from '@/components/workshopslist'
import WorkshopDetails from '@/components/WorkshopDetails'

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
            },
            {
                name: 'WorkshopDetails',
                path: '/workshops/:id',
                component: WorkshopDetails,
                props: true,
               
            }

        ]

    }
)
export default router