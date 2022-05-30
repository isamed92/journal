import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { login } from '../actions/auth';
import { startLoadingNotes } from '../actions/notes';
import { JournalScreen } from '../components/journal/JournalScreen';
import { auth } from '../firebase/firebase-config';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);

        dispatch(startLoadingNotes(user.uid))
      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return <h1> wait...</h1>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Navigate to='auth/login' replace />} />
        <Route
          path='/auth/*'
          element={
            <PublicRoute isAuth={isLoggedIn}>
              <AuthRouter />
            </PublicRoute>
          }
        />
        <Route
          path='/'
          element={
            <PrivateRoute isAuth={isLoggedIn}>
              <JournalScreen />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
