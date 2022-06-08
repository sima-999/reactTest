import React from 'react'
import {Outlet,useNavigate} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
// export class Home extends React.Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//         const navigate = useNavigate()
//         const clickfun =()=>navigate(`\/home\/detail\/${Math.random()}`)
//         return (
//         <div>
//             <div>我是主页</div>
//             <div onClick={clickfun}>跳转详情</div>
//             <Outlet/>
//         </div>
//         )
//     }    
// }
export const Home:React.FC=(props)=>{
    const {t}=useTranslation()
    const navigate = useNavigate()
    const detailId=Math.floor(Math.random()*1000)
    const clickfun =()=>navigate(`\/home\/detail\/${detailId}`)
    return (
        <div>
            <h1>{t('home.summary')}</h1>
            <div>我是主页</div>
            <div onClick={clickfun}>跳转详情:{detailId}</div>
            <Outlet/>
        </div>
    )
}
