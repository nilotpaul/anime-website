import Home from './components/essentials/Home'
import About from './components/pages/About'
import Anime from './components/pages/Anime'
import Contact from './components/pages/Contact'
import Manga from './components/pages/Manga'
import Privacy from './components/pages/Privacy'
import Terms from './components/pages/Terms'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/essentials/Header'
import Banner from './components/essentials/Banner'
import Novel from './components/pages/Novel'
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
          <Route path='/lightnovel' element={<Novel/>}/>
          <Route path='/terms&conditions' element={<Terms/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
