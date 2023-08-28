import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function SearchBar() {
  return (
    <div className='h-40 w-full flex items-center justify-center'>
      <input
       type="text"
       className='border-2 border-black m-5 rounded-lg p-3 w-[500px]'
       placeholder='Enter the name of item' />
      
      <button
      type="button"
      className="inline-flex items-center rounded-md bg-black px-3 py-4 text-sm font-semibold text-white hover:bg-black/80"
    >
      Search
      <ArrowRight className="ml-2 h-4 w-4" />
    </button>
    </div>
  )
}
