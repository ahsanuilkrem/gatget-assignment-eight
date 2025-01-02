import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Errorpage from './components/Errorpage/Errorpage.jsx';
import Home from './components/Home/Home.jsx';
import Dashboard from './components/Home/Dashboard/Dashboard.jsx';
import Products from './components/Products/Products.jsx';
import ViewDetails from './components/ViewDetails/ViewDetails.jsx';
import Statistics from './statistics/Statistics.jsx';
import Carts from './components/Carts.jsx';
import Wishlist from './components/Wishlist.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children:[
      {
        path: '/',
        element:<Home></Home>,
        loader: () => fetch('../categories.json'),  
        children:[
          {
            path: '/',
            element:<Products></Products>,
            loader: () => fetch('../productsData.json'),
          },
          {
            path: 'category/:category',
            element:<Products></Products>,
            loader: () => fetch('../productsData.json'),
          }
        ]
      },
      {
        path:'product/:product_id',
        element:<ViewDetails></ViewDetails>,
        loader:() => fetch('../productsData.json'),
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
          {
            index:true,
            // path: '/dashboard/carts',
            element:<Carts></Carts>,
            loader:() => fetch('../productsData.json'),
          },
          {
            path:'wishlist',
            element: <Wishlist></Wishlist> ,
            loader:() => fetch('../productsData.json'),
          },
        ]
      },
  
      {
        path:'statistics',
        element: <Statistics></Statistics>
      }
    ]
  },
 
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
