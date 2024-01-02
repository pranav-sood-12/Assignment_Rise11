import React from 'react'
import { Route ,BrowserRouter as Router, Routes} from 'react-router-dom'
import Home from './Components/Home'
import Header from './Components/Header'
import './App.css'
import MakeTodo from './Components/MakeTodo'
const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/todo' element={<MakeTodo/>}/>
        
      </Routes>
    </Router>
  )
}

export default App

/* <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/coins" element={<Coins/>} />
        <Route path="/exchange" element={<Exchange/>} />
        <Route path="/coins/:id" element={<CoinDetails/>} />
      </Routes>
      <Footer/>
    </Router> */