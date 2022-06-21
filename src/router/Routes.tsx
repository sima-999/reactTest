import {RouteObject} from 'react-router-dom'
import {Home,Detail,Register,Demo,Login} from '../pages'
import {onRouteBeforeRule,RouteObjectRule} from './router-guard'
const routes:RouteObjectRule[]=[
    {
        path: 'demo',
        meta: {
            title: '测试',
        },
        page: () => import('../pages/demo')
    },
    {
        path: 'register',
        meta: {
            title: '注册',
        },
        page: () => import('../pages/register')
    },
]
//根据路径获取路由
const checkAuth=(routers:Array<RouteObjectRule>,path:string)=>{
    for (const data of routers) {
        if(data.path===path) return data
        if (data.children) {
            const res = checkAuth(data.children, path);
            if (res) return res;
        }
    }
    return null
}

// 如果单独的页面需要设置权限等， 在outlet前根据路径，获取路由的详情，设置权限
const checkRouterAuth = (path: string) => checkAuth(routes, path);

//全局路由守卫
const onRouteBefore: onRouteBeforeRule = (meta, to) => {
    const {auth, title} = meta;
    // 动态修改页面title
    document.title = title || '司马懿啊';
    console.log('to' , to)
    return to;
    // token权限验证
    // return (auth && !getLocalStorage('access_token')) ? '/login' : to;
}

export default routes

export {
    onRouteBefore,
    checkRouterAuth
}
// const routes:RouteObjectRule[]=[
//     {
//         path:'*',
//         redirect:'/home',
//     },
//     {
//     path:'home',
//     element:<Home/>,
//     children:[
//         {index:true,element:<div>我是base</div>},
//         {
//         path:'detail/:id',
//         element:<Detail/>,
//     }]
//     },
//     {
//         path:'register',
//         element:<Register/>
//     },
//     {
//         path:'demo',
//         element:<Demo/>
//     },
//     {
//         path:'login',
//         element:<Login/>
//     }]
// export default routes