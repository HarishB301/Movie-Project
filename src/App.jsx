
import './App.css'
// import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import NavBar from './components/NavBar'
import {Route,Routes} from "react-router-dom"
function App() {
  

  return (
    <>
    <div>
      <NavBar></NavBar>
    </div>
    <main className='main-content'>
    
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Favourites' element={<Favourites/>}></Route>
    
    </Routes>
    
    </main>
    </>
    
  )
}

export default App
