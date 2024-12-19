
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import DetailView from './pages/detailView/DetailView'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' index element={<Home/>}/>
      <Route path='/detailView/:movie' element={<DetailView/>}/>
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
