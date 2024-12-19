
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import SingleCar from './components/singleCar/SingleCar'



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' index element={<Home/>}/>
      <Route path='carInfo/:carId' element={<SingleCar/>}/>
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
