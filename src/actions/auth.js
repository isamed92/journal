
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import { auth, googleProvider } from '../firebase/firebase-config';
import { types } from '../types/types';
import { uiFinishLoading, uiStartLoading } from './ui';

export const startLoginWithEmailAndPassword = (email, password) => {
  return (dispatch) => {
    dispatch(uiStartLoading())
    signInWithEmailAndPassword(auth, email, password)
      .then( ({user}) => {
        dispatch(login(user.uid, user.displayName))
      })
      .catch(e => {
        // console.log(e)
        Swal.fire('Error', e.message, 'error')
      })
      .finally(() => {
        dispatch(uiFinishLoading())
      })
  };
};
export const startLoginGoogle = () => {
  return (dispatch) => {
    signInWithPopup(auth, googleProvider)
        .then(({user}) => {
            dispatch(login(user.uid, user.displayName))
        })
        .catch(e => {
          // console.log(e)
        Swal.fire('Error', e.message, 'error')

        })
    
  };
};

export const startRegisterWithNameEmailPassword = (name, email, password) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async({user}) => {
        await updateProfile(auth.currentUser, {displayName: name})
        console.log(user)
        dispatch(login(user.uid, user.displayName))

      })
      .catch(e => {
        // console.log(e)
        Swal.fire('Error', e.message, 'error')

      })
  }
}

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});


export const startLogout = () => {
  return async (dispatch) => {
    await signOut(auth);
    dispatch(logout())
  }
}

export const logout = () => ({
  type: types.logout
})