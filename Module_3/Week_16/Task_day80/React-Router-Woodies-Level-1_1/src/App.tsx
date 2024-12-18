
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Categories from './pages/categories/Categories'
import RootLayout from './rootLayout/RootLayout'
import Jenson from './pages/jenson/Jenson'
import Deon from './pages/deon/Deon'
import Krisha from './pages/krisha/Krisha'

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route path='/' element={<RootLayout/>}> 
      <Route index element= {<Home/>}/>
      <Route path='about'  element= {<About/>}/>
      <Route path='products' element= {<Categories/>}/>
      <Route path='jenson' element={<Jenson/>}></Route>
      <Route path='deon' element={<Deon/>}></Route>
      <Route path='krisha' element={<Krisha/>}></Route>
      </Route>
      
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
