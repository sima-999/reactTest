// export * from './Register'

import React from 'react'
import {useTranslation} from 'react-i18next'

import {useSelector} from '../../redux/hooks'
import {useDispatch } from 'react-redux'
import {languageSlice} from '../../redux/languageForSlice/slice'

export const Register:React.FC=()=>{
    const language=useSelector((state)=>state.language.language)
    const languageList=useSelector((state)=>state.language.languageList)
    const dispatch=useDispatch()

    const changeLanguage=()=>{
        const lang=language==='zh'?'en':'zh'
        dispatch(languageSlice.actions.changeLanguage(lang))
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

