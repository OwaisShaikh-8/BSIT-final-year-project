import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Landingpage from './Screens/Landingpage/Landingpage'

function App() {
  return (
    // <>
    // <Afterlogin/>
    // </>
    <div>

    {/* <Routes>
      <Route path='/' element={<Landingpage/>}/>
      
    </Routes> */}
    <Routes>
      <Route path='/' element={<Afterlogincustomer/>}/>
      
    </Routes>
    </div>
  )
}

export default App
