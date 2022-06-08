import React,{useContext} from 'react';
import styles from './Robot.module.css'
import {appContext} from '../AppState'
import {useAddToCart} from './AddToCart'
interface RobotProps{
    id:number,
    name:string,
    email:string
}


const RobotDiscount:React.FC<RobotProps>=({id,name,email}:RobotProps)=> {
    const value =useContext(appContext)
    const addToCart=useAddToCart()
    // const setState=useContext(appSetStateContext)
    // const addToCart=()=>{
    //     if(setState){
    //         setState(state=>{
    //             return {
    //                 ...state,
    //                 shoppingCart:{
    //                     items:[...state.shoppingCart.items,{id,name}]
    //                 }
    //             }
    //         })
    //     }
    // }
    return (
        // <appContext.Consumer>
        //     {
        //         (value)=>{
        //             return (<div className={styles.cardContainer}>
        //                 <img src={`https://robohash.org/${id}`} alt="robot" />
        //                 <h2>{name}</h2>
        //                 <p>{email}</p>
        //                 <p>地址:{value.address}</p>
        //             </div>)
        //         }
        //     }
        // </appContext.Consumer>
        <div className={styles.cardContainer}>
            <img src={`https://robohash.org/${id}`} alt="robot" />
            <h2>打折商品</h2>
            <h2>{name}</h2>
            <p>{email}</p> 
            <p>地址:{value.address}</p>
            <button onClick={()=>addToCart(id,name)}>加入购物车</button>
        </div>
    )
}

export default RobotDiscount