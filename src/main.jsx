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
// import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx'
import PrivateRoute from './pages/PrivateRoute/PrivateRoute.jsx'
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import UpdateDate from './pages/UpdateDate.jsx';
import VisitorReview from './pages/VisitorReview.jsx';


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
        element: <PrivateRoute><MyBooking></MyBooking></PrivateRoute>
      },
      {
        path:'/rooms',
        element: <Rooms></Rooms>
      },
      {
        path:'/room/:id',
        element: <RoomDetails></RoomDetails>,
        loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/room/${params.id}`)
      },
      {
        path:'/aboutus',
        element: <About></About>
      },
      {
        path:'/contact',
        element: <Contact></Contact>
      }, 
      {
        path:'/update',
        element: <UpdateDate></UpdateDate>
      },
      {
        path:'/visitor',
        element: <VisitorReview></VisitorReview>
      },
      
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
