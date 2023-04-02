import Home from './components/Home'
import About from './components/About'
import Anime from './components/Anime'
import Contact from './components/Contact'
import Manga from './components/Manga'
import Privacy from './components/Privacy'
import Reco from './components/Reco'
import Terms from './components/Terms'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/essentials/Header'
import Banner from './components/essentials/Banner'
// import '../src/App.css'

function App() {

  return (
  
  
    <div className="App">
          <Banner/>
        <BrowserRouter>
        <Header/>
          <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/anime' element={<Anime/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/manga' element={<Manga/>}/>
          <Route path='/privacy' element={<Privacy/>}/>
          <Route path='/recommendations' element={<Reco/>}/>
          <Route path='/terms&conditions' element={<Terms/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
