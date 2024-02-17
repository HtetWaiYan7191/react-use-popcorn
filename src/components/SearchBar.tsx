import React from 'react'

const SearchBar = ({ handleSearchQuery, query }: { handleSearchQuery: (target: string) => void; query: string }) => {
  return (
    <div className='search-bar-container min-w-[400px]'>
      <input type="text" onChange={(e) => handleSearchQuery(e.target.value)} value={query} placeholder='search by name' className='w-full px-2 py-1 bg-purple-700 border rounded-md placeholder:text-white focus-within:outline-purple-600' />
    </div>
  )
}

export default SearchBar