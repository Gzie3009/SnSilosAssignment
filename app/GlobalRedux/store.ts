'use client'
import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./Features/userSlice"
export const store=configureStore({
    reducer:{
        users:userSlice
    }
})
export type Rootstate=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch