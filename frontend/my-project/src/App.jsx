import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Landingpage from './Screens/Landingpage/Landingpage'
import Afterlogin from './Screens/Afterlogin/Afterlogin'

function App() {
  return (
    // <>
    // <Afterlogin/>
    // </>
    <div>

    <Routes>
      <Route path='/' element={<Landingpage/>}/>
    </Routes>
    </div>
  )
}

export default App
