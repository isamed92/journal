import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
      <NotesAppBar />
      <div className='notes__content'>
        <input
          type='text'
          placeholder='Some awesome title'
          className='notes__title-input'
          autoComplete='off'
        />
        <textarea
          placeholder='what happened today...'
          className='notes__textarea'
        ></textarea>

        <div className='notes__image'>
          <img
            src='https://i.pinimg.com/736x/e4/47/6c/e4476c0d5314dac9e6ec1df0188a1691.jpg'
            alt='iamge'
          />
        </div>
      </div>
    </div>
  );
};
