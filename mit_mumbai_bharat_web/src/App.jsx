import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Programmes from './pages/programmes/Programmes'
import Courses from './pages/courses/Courses'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <Home/>
      <Programmes/>
      <Courses/>
      <Footer/>
      
    </>
  )
}

export default App
