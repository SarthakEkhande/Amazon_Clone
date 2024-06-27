import { createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet, Route, ScrollRestoration  } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { ProductsData } from './api/api';
import Home from './pages/Home';
import TopFooter from './components/footer/TopFooter';
import AddtoCart from './pages/AddtoCart';

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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index loader={ProductsData} element={<Home />} />
        <Route path="/cart" element={<AddtoCart />} />
      </Route>
    )
  );

  return (
    <div className="font-bodyFont bg-gray-100">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
