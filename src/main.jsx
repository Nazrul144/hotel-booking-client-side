import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  HelmetProvider } from 'react-helmet-async';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layout/Root.jsx';
import Home from './pages/Home.jsx';
import Register from './pages/authentication/Register.jsx';
import Login from './pages/authentication/Login.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import MyBooking from './pages/MyBooking.jsx';
import Rooms from './pages/Rooms.jsx';
import RoomDetails from './pages/RoomDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/register',
        element: <Register></Register>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/myBooking',
        element: <MyBooking></MyBooking>
      },
      {
        path:'/rooms',
        element: <Rooms></Rooms>
      },
      {
        path:'/room/:id',
        element: <RoomDetails></RoomDetails>,
        loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/room/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
