import { useState } from 'react'
import SideBar from './components/SideBar/SideBar'
import WorkSpace from './components/WorkSpace/WorkSpace'
import Header from './components/Header/Header'

function App() {

  return (
    <div className='main-container'>
      <SideBar></SideBar>
      <div className='main-container__main-part'>
        <Header></Header>
        <WorkSpace></WorkSpace>
      </div>
    </div>
  )
}

export default App
