import React from 'react'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Users from './components/Users'

const App = () => {
  return (
    <div>
      
      <Routes>
      <Route path='/' element={<Login/>}/>
        <Route path='/users' element={<Users/>}/>
      </Routes>
    </div>
  )
}

export default App