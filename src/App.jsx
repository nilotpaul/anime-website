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
import Animeblog from './components/pages/Animeblog'
import Animerev from './components/pages/Animerev'
import Animereco from './components/pages/Animereco'
import Mangablog from './components/pages/Mangablog'
import Mangarev from './components/pages/Mangarev'
import Mangarec from './components/pages/Mangarec'
// import '../src/App.css'

function App() {

  return (
  
  
    <div className="App">
          <Banner/>
        <BrowserRouter>
        <Header/>
          <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/animeblog' element={<Animeblog/>}/>
          <Route exact path='/animereview' element={<Animerev/>}/>
          <Route exact path='/animerecommendations' element={<Animereco/>}/>
          <Route exact path='/mangablog' element={<Mangablog/>}/>
          <Route exact path='/mangareview' element={<Mangarev/>}/>
          <Route exact path='/mangarecommendations' element={<Mangarec/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/privacy' element={<Privacy/>}/>
          <Route path='/lightnovel' element={<Novel/>}/>
          <Route path='/terms&conditions' element={<Terms/>}/>
          <Route path='/anime' element={<Anime/>}/>
          <Route path='/manga' element={<Manga/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
