import React from 'react'
import Home from './pages/Home/Home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound'
import Login from './pages/Login/Login'
import LoginMain from './components/LoginMain/LoginMain'
import LoginSms from './components/LoginSms/LoginSms'
import LoginEmail from './components/LoginEmail/LoginEmail'
import OTPVerification from './components/OTPVerification/OTPVerification'
import { PhoneProvider } from './context/PhoneContext'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path='/'>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />}>
          <Route index element={<LoginMain />} />
          <Route path='loginSms'>
            <Route index element={<LoginSms />} />
            <Route path='loginsmscode' element={<OTPVerification />} />
          </Route>
          <Route path='loginEmail' element={<LoginEmail />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>

    )
  )

  return (
    < PhoneProvider >
      <RouterProvider router={router} />
    </PhoneProvider >
  )
}

export default App
