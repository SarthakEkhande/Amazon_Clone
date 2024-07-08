import { createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet, Route, ScrollRestoration  } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { ProductsData } from './api/api';
import Home from './pages/Home';
import TopFooter from './components/footer/TopFooter';
import AddtoCart from './pages/AddtoCart';
import SignIn from './pages/SignIn';
import Registration from './pages/Registration';
import firebaseConfig from './firebase.config';
import MainProducts from './pages/MainProducts';
import Favurate from './pages/Favurate';
import ProductDetailPage from './pages/ProductDetailPage';

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <TopFooter />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index loader={ProductsData} element={<Home />} />
      <Route path="/cart" element={<AddtoCart />} />
      <Route path='/signin' element={<SignIn/>}></Route>
      <Route path='/registration' element={<Registration/>}></Route>
      <Route path='/mainproducts' element={<MainProducts/>}></Route>
      <Route path='/fav' element={<Favurate/>}></Route>
      <Route path='/product:id' element={ProductDetailPage}></Route>
    </Route>
  )
);

function App() {
  return (
    <div className="font-bodyFont bg-gray-100">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
