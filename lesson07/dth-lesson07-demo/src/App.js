import React from 'react'
import Dth_UseState from './components/DthUseState'
import DthUseEffect from './components/DthUseEffect'
import DthUsseContext from './components/DthUsseContext'
import './App.css'

export default function App() {
  return (
    <div className='container border mt-3'>
      <h1 className='text-center'>Đàm Thúy Hường - Hook</h1>
      <hr/>
      <Dth_UseState />
      <hr/>
      <DthUseEffect />
      <hr/>
      <DthUsseContext/>
    </div>
  )
}
