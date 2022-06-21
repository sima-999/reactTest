import {
    useRoutes,
    RouteObject,
    Navigate,
    useLocation
} from 'react-router-dom'
import React, {
    Suspense
} from 'react'

interface FunctionRule {
    (): any
}
//meta规范
interface MetaRule {
    auth ?: boolean, //是否需要登录验证
    title ?: string, //页面title
    [name: string]: string | boolean | undefined //其他参数
}
//单个路由规则
interface RouteObjectRule extends RouteObject{
    children?:RouteObjectRule[],//子路由
    path?:string,//页面路径
    page?:FunctionRule,//route导入页面的对象
    redirect?:string,//重定向地址，用于设置页面默认地址
    meta?:MetaRule////页面参数
}
interface onRouteBeforeRule<meta=MetaRule,to=string>{
    (meta:meta,to:to):any|never
}
type LoadingEleRule=React.ReactNode

interface GuardRule{
    routers:RouteObjectRule[],
    onRouterBefore?:onRouteBeforeRule,
    loading?:LoadingEleRule
}
let onRouterBefore:onRouteBeforeRule
let RouterLoading:FunctionRule
//路由导航，设置redirect重定向和auth权限
function Guard({element,meta}){
    const {pathname} =useLocation()
    console.log('pathname',pathname)
    const nextPath=onRouterBefore?onRouterBefore(meta,pathname):pathname
    if(nextPath&&nextPath!==pathname){
        element=<Navigate to={nextPath} replace={true} />
    }
    return element
}
//路由懒加载
function lazyLoadRouters(page:()=>Promise<any>,meta?:MetaRule){
    meta=meta||{}
    const LazyElement=React.lazy(page)
    const GetElement=()=>{
        return (
            <Suspense fallback={<RouterLoading/>}>
                <LazyElement/>
            </Suspense>
        )
    }
    return <Guard element={<GetElement/>} meta={meta}/>
}
function transRoutes(routes:RouteObjectRule[]){
    const list:Array<RouteObject>=[]
    routes.forEach(route=>{
        const obj={...route}
        if(obj.redirect){
            obj.element=<Navigate to={obj.redirect} replace={true}/>
        }
        if(obj.page){
            obj.element=lazyLoadRouters(obj.page,obj.meta)
        }
        if(obj.children){
            obj.children=transRoutes(obj.children)
        }
        ['redirect','page','meta'].forEach(name=> Reflect.deleteProperty(obj,name))
        list.push(obj)
    })
    return list
}
export type{
    RouteObjectRule,
    MetaRule,
    FunctionRule,
    onRouteBeforeRule,
    LoadingEleRule
}
function RouterGuard(params:GuardRule){
    params.onRouterBefore&&(onRouterBefore=params.onRouterBefore)
    RouterLoading=()=>params.loading||<></>
    return useRoutes(transRoutes(params.routers))
}
export default RouterGuard