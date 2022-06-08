import React from 'react'
import {useParams,useNavigate} from 'react-router-dom'
interface routeProps{
    id:string
}
export const Detail:React.FC=(props)=>{
    console.log(useParams())
    const navigate=useNavigate()
    return (
    <div>
        <div>我是详情页</div>
        <div onClick={()=>navigate('/register')}>跳到注册页</div>
    </div>
    )
}