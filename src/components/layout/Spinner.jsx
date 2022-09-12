import React from 'react'
import spinner from './assets/XcF7.gif'

function Spinner() {
  return (
    <div className='w-100 mt-20'>
        <img width={200} className='text-center mx-auto' src={spinner} alt="loading..." />
    </div>
  )
}

export default Spinner