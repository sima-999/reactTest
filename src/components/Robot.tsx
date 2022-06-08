import React,{useContext} from 'react';
import styles from './Robot.module.css'
import {appContext} from '../AppState'
import {withAddToCart} from './AddToCart'
export interface RobotProps{
    id:number,
    name:string,
    email:string,
    addToCart:(id:number,name:string)=>void
}


const Robot:React.FC<RobotProps>=({id,name,email,addToCart}:RobotProps)=> {
    const value =useContext(appContext)
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
            <h2>{name}</h2>
            <p>{email}</p>
            <p>地址:{value.address}</p>
            <button onClick={()=>addToCart(id,name)}>加入购物车</button>
        </div>
    )
}

export default withAddToCart(Robot)