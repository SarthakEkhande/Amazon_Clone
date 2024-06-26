import { useState } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
  Route
} from "react-router-dom";
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import {ProductsData} from "./api/api"
import Home from './pages/Home';
import TopFooter from './components/footer/TopFooter';




const Layout=()=>{
  return(
    <div>
      <Header/>
      <outlet/>
        <Home/>
      <TopFooter/>
   
    </div>
  )
}

function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route>
    <Route path='/' element={<Layout/>}>
    
      </Route>
        <Route path='/home' loader={ProductsData} element={<Home/>}></Route>
        </Route>
  ))
  
  return (
    <>
    <div className='font-bodyFont '>
      <RouterProvider router={router}></RouterProvider>
    </div>
     
      
    </>
  )
}

export default App
