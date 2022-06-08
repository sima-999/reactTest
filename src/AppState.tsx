import React,{useState} from 'react'

interface AppStateValue {
    address:string;
    shoppingCart:{items:Array<{id:number,name:string}>}
}

const defaultContentValue:AppStateValue={
    address:'天棚南路123123号',
    shoppingCart:{items:[]}
}
export const appContext=React.createContext(defaultContentValue)
export const appSetStateContext=React.createContext<React.Dispatch<React.SetStateAction<AppStateValue>>|undefined>(undefined)
interface Props{
    children:any
}
export const AppStateProvider:React.FC<Props>=(props)=>{
    const [state,setState]=useState(defaultContentValue)
    return (
        <appContext.Provider value={state}>
            <appSetStateContext.Provider value={setState}>
                {props.children}
            </appSetStateContext.Provider>
        </appContext.Provider>
    )
}