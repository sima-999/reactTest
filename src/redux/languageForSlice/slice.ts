import i18n from 'i18next';
import {createSlice,PayloadAction} from '@reduxjs/toolkit'

export interface LanguageState {
    language: "en" | "zh";
    languageList: { name: string; code: string }[];
}

const initialState: LanguageState = {
    language: "zh",
    languageList: [
      { name: "中文", code: "zh" },
      { name: "English", code: "en" },
    ],
  };
type languageType='zh'|'en'
export const languageSlice=createSlice({
    name:'language',
    initialState,
    reducers:{
        changeLanguage(state,action:PayloadAction<languageType>){
            i18n.changeLanguage(action.payload)
            console.log('action.meta',action)
            state.language=action.payload
        }
    },
    // extraReducers
})