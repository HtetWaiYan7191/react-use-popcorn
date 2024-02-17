import React from 'react'

const ErrorMessage = ({errorMessage} : {errorMessage: string}) => {
  return (
    <div className='flex items-center justify-center pt-20 gap-x-4'>
        Warning
        <h2 className='font-semibold text-red-500'>{errorMessage}</h2>
    </div>
  )
}

export default ErrorMessage