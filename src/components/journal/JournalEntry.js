import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
        <div className='journal__entry-picture' style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg)' 
        }}></div>
        <div className='journal__entry-body'>
            <p className='journal__entry-title'>Un nuevo dia</p>
            <p className='journal__entry-content'>Aute deserunt velit labore adipisicing elit tempor.</p>
        </div>
        <div className='journal__entry-date-box'>
            <span>Lunes</span>
            <h4>28</h4>
        </div>
    </div>
  )
}
