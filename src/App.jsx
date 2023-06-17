import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Search from './pages/search/Search'

function App() {

  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/search" element={<Search/>}/>
   </Routes>
  )
}

export default App
