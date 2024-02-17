import React from 'react'

const WatchedSummary = () => {
  return (
    <div className='p-4 watch-summary-container bg-slate-700'>
      <h2>MOVIES YOU WATCHED</h2>
      <ul className='flex watch-detail-container gap-x-6'>
        <li>0 movies</li>
        <li>star 0</li>
        <li>star 0</li>
        <li>time 0 min</li>
      </ul>
    </div>
  )
}

export default WatchedSummary