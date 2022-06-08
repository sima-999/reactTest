// export * from './Register'

import React from 'react'
// import {useParams,useLocation} from 'react-router-dom'
import {changeLanguageActionCreator,LanguageActionTypes} from '../../redux/language/languageActions'
import {useTranslation} from 'react-i18next'

import {useSelector} from '../../redux/hooks'
import {useDispatch } from 'react-redux'
import {Dispatch} from 'redux'

export const Register:React.FC=()=>{
    // const location = useLocation();
    // const params = useParams();
    // console.log('location',location)
    // console.log('params',params)
    const language=useSelector((state)=>state.language.language)
    const languageList=useSelector((state)=>state.language.languageList)

    // const dispatch=useDispatch()
    const dispatch=useDispatch<Dispatch<LanguageActionTypes>>()

    const changeLanguage=()=>{
        const lang=language==='zh'?'en':'zh'
        dispatch(changeLanguageActionCreator(lang))
    }
    const {t}=useTranslation()
    return (
        <div>
            <button onClick={()=>{
                changeLanguage()
            }}>点击切换语言</button> 
            <div>我是注册页面啊</div>
            <h1>{t('register.simayi')}</h1>
            <p>{language}</p>
            <p>{ JSON.stringify(languageList)}</p>
        </div>
    )
}

