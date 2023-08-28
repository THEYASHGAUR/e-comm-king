import React from 'react'
import SwiperCard from './SwiperCard'
import CardComp from './CardComp';

const Popular = () => {
  return (
    <>

      <div className='p-2 md:p-4 flex-col justify-center items-center'>
        <h1 className='underline text-3xl'>Products from different platforms as per your search </h1>

        <div className='flex flex-col items-center justify-center p-5'>

          <CardComp />
          <CardComp />
          <CardComp />
        </div>



      </div>
    </>
  )
}

export default Popular
