import React from 'react'
import Home from './Pages/Home/Home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import NotFound from './Components/NotFound/NotFound'
import Auth from './Pages/Auth/Auth'
import AuthMain from './Components/AuthMain/AuthMain'
import EmailSignup from './Components/EmailSignup/EmailSignup'
import LoginEmail from './Components/LoginEmail/LoginEmail'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path='/'>
        <Route index element={<Home />} />
        <Route path='signupOrLogin' element={<Auth />}>
          <Route index element={<AuthMain />} />
          <Route path='emailsignup' element={<EmailSignup />} />
          <Route path='loginemail' element={<LoginEmail />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>

    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
