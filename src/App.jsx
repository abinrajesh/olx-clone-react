import React from 'react'
import Home from './Pages/Home/Home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import NotFound from './Components/NotFound/NotFound'
import Auth from './Pages/Auth/Auth'
import AuthMain from './Components/AuthMain/AuthMain'
import EmailSignup from './Components/EmailSignup/EmailSignup'
import LoginEmail from './Components/LoginEmail/LoginEmail'
import Ads from './Components/Ads/Ads';
import Profile from './Components/Profile/Profile'
import ProfileEdit from './Components/ProfileEdit/ProfileEdit'
import Post from './Pages/Post/Post'
import Wishlist from './Components/Wishlist/Wishlist'
import Chat from './Components/Chat/Chat'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(

      <>
        <Route path='/' element={<Home />}>

          <Route index element={<Ads />} />
          <Route path='profile' element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          } />
          <Route path='profile/editprofile' element={
            <PrivateRoute>
              <ProfileEdit />
            </PrivateRoute>
          } />
          <Route path='wishlist' element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          } />
          <Route path='chat' element={
            <PrivateRoute>
              <Chat />
            </PrivateRoute>
          } />


          <Route path='login' element={<Auth />}>
            <Route index element={<AuthMain />} />
            <Route path='emailsignup' element={<EmailSignup />} />
            <Route path='loginemail' element={<LoginEmail />} />
          </Route>


        </Route >

        <Route path='*' element={<NotFound />} />

        <Route path='post' element={
          <PrivateRoute>
            <Post />
          </PrivateRoute>
        } />
      </>

    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
