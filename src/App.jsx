import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp1 from './components/Comp1'
import Counter from './components/Counter'
import Rating from './components/Rating'
import Userlist from './components/Userlist'
import Productlist from './components/Productlist'
import Student from './components/Student'
import Login from './components/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{display:"flex",alignItems:'center',justifyContent:"center"}}>
    <Student/>
    <Login/>
    </div>
    </>
  )
}

export default App
