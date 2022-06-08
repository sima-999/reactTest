import {Middleware}  from 'redux'

export const actionTest:Middleware=(store)=>(next)=>(action)=>{
    console.log('起始测试')
    next(action)
    console.log('结束测试')
}