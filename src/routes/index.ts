import WishList from '../components/Views/WishList/WishList';
import AccountBook from '../components/Views/AccountBook/AccountBook';
import {RouteConfig} from 'react-router-config'
import AccountBookDetail from '../components/Views/AccountBook/AccountBookDetail/AccountBookDetail';
import Statistics from '../components/Views/Statistics/Statistics';
import TODO from '../components/Views/TODO/TODO';

const routes: RouteConfig[] = [
    {
        path: '/',
        exact: true,
        component: AccountBook,
    },
    {
        path: '/wishList',
        component: WishList,
    },
    {
        path: '/statistics',
        component: Statistics,
    },
    {
        path: '/todo',
        component: TODO,
    },
    {
        path: '/accountBook',
        component: AccountBook,
        // routes: [
        //     {
        //         path: '/accountBook/content?id=:id&title=:title',
        //         component: AccountBookContent,
        //     },
        // ],
    },
    {
        path: '/bookdetail/:id/:title',
        component: AccountBookDetail,
    },
    // {
    //     path: '/detail/:type/:id/:title',
    //     component: ,
    // }
]

export default routes