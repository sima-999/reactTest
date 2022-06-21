import React,{useState,useEffect} from 'react';
import logo from './assets/images/logo.svg';
// import robots from './mockdata/robots.json';
import Robot from './components/Robot';
import RobotDiscount from './components/RobotDiscount';
import styles from './App.module.css';
import ShoppogCart from './components/ShoppingCart';

import {BrowserRouter,Route,Routes,useRoutes} from 'react-router-dom'
import {Home,Detail} from './pages'

import routes,{onRouteBefore} from './router/Routes'
import RouterGuard from './router/router-guard'

interface Props{
  userInfo:{id:number,name:string}
}

// interface State{
//   robotGallery:Array<any>,
//   count:number
// }
// const App:React.FC<Props>=(props)=>{
//   const [count,setCount]=useState<number>(0)
//   const [robotGallery,setRobotGallery]=useState<Array<any>>([])
//   const [loading,setLoading]=useState<boolean>(true)
//   const [error,setError]=useState<string>('')

//   // function test() {
//   //   console.log("测试")
//   //   return count
//   // }

//   useEffect(()=>{
//     // fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(data=>
//     // setRobotGallery(data)
//     // )
//     (async ()=>{
//       setLoading((loadingValue)=>{
//         console.log('loadingValue',loadingValue)
//         return true
//       })
//       setError('')
//       try{
//       const response= await fetch('https://jsonplaceholder.typicode.com/users')
//       setRobotGallery(await response.json())
//       }catch(e:any){
//         setError(e.message)
//       }
//       // setLoading(()=>false)
//       setLoading((loadingValue)=>{
//         console.log('loadingValue',loadingValue)
//         return false
//       })
//     })()
//   },[count])
//   return (
//     <BrowserRouter>
//     <Route path='/detail' component={Detail} />
//         <div className={styles.app}>
//         <div className={styles.appHeader}>
//           <img src={logo} alt="logo" className={styles.appLogo}/>
//           <h1>按时发生范德萨发生的反复噶地方噶地方噶地方噶地111方</h1>
//           {/* <p>cccc: {test()}</p> */}
//           <h2>{props.userInfo.name}</h2>
//         </div>
//         <button onClick={()=>{
//           setCount(count+1)
//         }}>点击</button><span>{count}</span>
//         <ShoppogCart></ShoppogCart>
//         {/* {(!error||error!=='')&&<div>网站出错：{error}</div>} */}
//         {(error&&error!=='')&&<div>网站出错：{error}</div>}
//         { 
//         loading?
//         <span>加载中</span>:        
//         <div className={styles.robotList}>
//            {robotGallery.map((r,index)=>
//             {
//               return index%2===0?(<Robot id={r.id} key={r.id} name={r.name} email={r.email} />):(<RobotDiscount id={r.id} key={r.id} name={r.name} email={r.email} />)
//             })
//            }
//          </div>
//         }
//       </div>
//       </BrowserRouter>
//   )
//   // constructor(props){
//   //   super(props)
//   //   this.state={
//   //     robotGallery:[],
//   //     count:0
//   //   }
//   // }
//   // componentDidMount(){
//   //   fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(data=>this.setState({
//   //     robotGallery:data
//   //   }))
//   // }
  
//   // render(): React.ReactNode {
//   //   return (
//   //     <div className={styles.app}>
//   //       <div className={styles.appHeader}>
//   //         <img src={logo} alt="logo" className={styles.appLogo}/>
//   //         <h1>按时发生范德萨发生的反复噶地方噶地方噶地方噶地111方</h1>
//   //       </div>
//   //       <button onClick={()=>{
//   //         this.setState((prestate,preprop)=> { console.log({prestate,preprop}); return {count:prestate.count+1}})
//   //         this.setState((prestate,preprop)=> { console.log({prestate,preprop}); return {count:prestate.count+1}})
//   //       }}>点击</button><span>{this.state.count}</span>
//   //       <ShoppogCart></ShoppogCart>
//   //       <div className={styles.robotList}>
//   //         {this.state.robotGallery.map(r=><Robot id={r.id} key={r.id} name={r.name} email={r.email} />)}
//   //       </div>
//   //     </div>
//   //   );
//   // }
// }

// function App(props) {
//   return (
//     <div>
//     <BrowserRouter>
//       <Routes>
//         <Route path='/home' element={<Home />}/>
//         <Route path='/detail/:id' element={<Detail />}/>
//         <Route path='/simayi' element={ 
//           <div>123123</div>
//         } >
//         </Route>
//       </Routes>
//     </BrowserRouter>
//     </div>
//   )
// }
function App(){
  // const element =useRoutes(routes)
  // return (<>{element}</>)
  return (
  <BrowserRouter>
  <RouterGuard
    routers={routes}
    onRouterBefore={onRouteBefore}
    loading={<div>路由加载中。。。</div>}/>
    </BrowserRouter>)
}
export default App;
