import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom'
import { useState } from 'react'
import Chat from '@/component/chat'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/chat' element={<Chat/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
