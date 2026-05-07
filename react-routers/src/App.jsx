import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import QuoteApp from './Quote'
import HomePage from './HomePage'
import Contact from './Contact'
import About from './About'
import Projects from './Projects'
import CountryList from './Country'
import CurrencyConverter from './Convertor'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '20px', background:'#fff'}}>
        <Link to='/' style={{marginRight:'10px'}}><button>Bosh sahifa</button></Link>
        <Link to='/about' style={{marginRight:'10px'}}><button>Men haqimda</button></Link>
        <Link to='/project' style={{marginRight:'10px'}}><button>Hozirgi Vaqt</button></Link>
        <Link to='/country' style={{marginRight:'10px'}}><button>Davlatlar</button></Link>
        <Link to='/convertor' style={{marginRight:'10px'}}><button>Convertor</button></Link>
        <Link to='/quote' style={{marginRight:'10px'}}><button>Kun Hikmati</button></Link>
        <Link to='/contact' style={{marginRight:'10px'}}><button>Aloqa bo'limi</button></Link>
      </nav>
      <div>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/project' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/quote' element={<QuoteApp/>}/>
          <Route path='/country' element={<CountryList/>}/>
          <Route path='/convertor' element={<CurrencyConverter/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App