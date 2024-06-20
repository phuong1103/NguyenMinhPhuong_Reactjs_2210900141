import React from 'react'
import NmpUseState from './Components/NmpUseState'
import NmpUseEffect from './Components/NmpUseEffect'
import NmpUseContex from './Components/NmpUseContex'
import'./App.css'
export default function App() {
  return (
    <div className='container border mt-3'>
      <h1 className=' text-center'>Nguyễn Minh Phương - Hook</h1>
      <hr/>
      <NmpUseState/>
      <hr/>
      <NmpUseEffect/>
      <hr/>
      <NmpUseContex/>
    </div>
  )
}
