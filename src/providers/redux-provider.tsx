"use client"
import {Provider} from "react-redux"
import React from 'react'
import { store } from './../redux/store';

interface Props{
  children: React.ReactNode
}

const ReduxProvider: React.FC<Props> = ({children}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default ReduxProvider
