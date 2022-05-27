import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
 
import { authReducer } from '../reducers/authReducer';
import { notesReducer } from '../reducers/notesReducer';
import { uiReducer } from '../reducers/uiReducer';
 
const reducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  notes: notesReducer
});
 
const middlewareEnhancer = applyMiddleware(thunk);
 
export const store = configureStore({
  reducer,
  undefined,
  middlewareEnhancer,
});