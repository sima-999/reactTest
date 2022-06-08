import React,{ReactNode} from 'react'
import store,{RootState} from '../../redux/store'
// import {useParams} from 'react-router-dom'
// import {LanguageState} from '../../redux/language/languageReducer'
import {changeLanguageActionCreator} from '../../redux/language/languageActions'
import {withTranslation,WithTranslation} from 'react-i18next'

import {connect } from 'react-redux'
import {Dispatch} from 'redux'

// type Props={}
interface State extends RootState{
    count:number
}

const mapStateToProps=(state:RootState)=>{
    return {
        language:state.language.language,
        languageList:state.language.languageList
    }
}

const mapDispatchToProps=(dispatch:Dispatch)=>{
    return {
        changeLanguage:(code:'en'|'zh')=>{
            const action=changeLanguageActionCreator(code)
            dispatch(action)
        },
        addLanguage:(name:string,code:string)=>{
            // const action=changeLanguageActionCreator(code)
            // dispatch(action)
        },
    }
}

class RegisterComponent extends React.Component<WithTranslation&ReturnType<typeof mapStateToProps>&ReturnType<typeof mapDispatchToProps>,State>{
    // constructor(props){   //使用connect 将store的数据用props来传递 也不需要subscribe store
    //     super(props)
    //     const storeState= store.getState()
    //     this.state={
    //         language:storeState.language,
    //         languageList:storeState.languageList,
    //         count:0
    //     }
    //     store.subscribe(this.handleChangeLanguage.bind(this))
    // }
    // handleChangeLanguage(){
    //     const storeState=store.getState()
    //     this.setState({
    //         language:storeState.language
    //     })
    // }
    changeLanguage(){
        const lang=this.props.language==='zh'?'en':'zh'
        // store.dispatch(changeLanguageActionCreator(lang))

        this.props.changeLanguage(lang)
    }
    render():ReactNode{
        const {t} =this.props
        return(
            <div>
                <button onClick={()=>{
                    this.changeLanguage()
                    // this.setState((prestate,preprop)=> { console.log({prestate,preprop}); return {count:prestate.count+1}})
                }}>点击切换语言</button> 
                <div>我是注册页面啊</div>
                <h1>{t('register.simayi')}</h1>
                {/* <p>{this.state.count}</p> */}
                <p>{this.props.language}</p>
                <p>{ JSON.stringify(this.props.languageList)}</p>
            </div>
        )
    }
}

export const Register=connect(mapStateToProps,mapDispatchToProps)(withTranslation()(RegisterComponent))
