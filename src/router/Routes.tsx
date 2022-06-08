import {RouteObject} from 'react-router-dom'
import {Home,Detail,Register} from '../pages'
const routes:RouteObject[]=[{
    path:'home',
    element:<Home/>,
    children:[
        {index:true,element:<div>我是base</div>},
        {
        path:'detail/:id',
        element:<Detail/>,
    }]
},
{
    path:'register',
    element:<Register/>
}]
export default routes