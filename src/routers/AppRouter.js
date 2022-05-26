import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { login } from '../actions/auth'
import { JournalScreen } from '../components/journal/JournalScreen'
import { auth } from '../firebase/firebase-config'
import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {

  const dispatch = useDispatch()

  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  useEffect(() => {
    onAuthStateChanged(auth, (user) =>{
      if(user?.uid){
        dispatch(login(user.uid, user.displayName))
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }

      setChecking(false)
    })
  
   
  }, [dispatch, setChecking, setIsLoggedIn])

  if ( checking ) {
    return <h1> Espere...</h1>
  }
  
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/auth/*' element={<AuthRouter/>}/>

            <Route path='/' element={<JournalScreen/>} />
            <Route
              path="/*"
              element={<Navigate to="auth/login" replace />}
              />
        </Routes>
    </BrowserRouter>

  )
}
