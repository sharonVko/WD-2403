
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Blog from './pages/blog/Blog'
import SingleView from './pages/singleView/SingleView'

function App() {
 
  const router = createBrowserRouter(
    createRoutesFromElements(

      <>
      <Route path='/' index element={<Home/>}/>
      <Route path='blog' element={<Blog/>}/>
      <Route path='article' element={<SingleView/>}/>
      </>
    )
  )
  return (
    <>
     <RouterProvider router={router}/>
       
    </>
  )
}

export default App
