import React from 'react'
import Image from 'next/image' 

interface CardProps {
  img: string;
  title: string;
  rating: number;
  platformImg: string;
  price: number;
  discount : number
}

const Card: React.FC<CardProps> = ({
  img , 
  title ,
  rating,
  platformImg,
  price ,
  discount 
}) => {
  return (
    <>
       <div className="w-[300px] rounded-md border">
      <Image src="/wallpaper.jpg" alt="wallpaper"
      className="h-[200px] w-full rounded-t-md object-cover"
        width={100}
        height={100}
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
         {title}
        </h1>
        <p className="mt-3 text-sm text-gray-600">
          {rating}
        </p>
        <div className="mt-4">
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #MacBook
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Apple
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Laptop
          </span>
          <Image src="/wallpaper.jpg" alt="wallpaper"
      className="h-[50px] w-32 rounded-t-md object-cover"
        width={30}
        height={30}
      />
        </div>
        <button
          type="button"
          className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
        {price} {discount}
        </button>
      </div>
    </div>
    </>
  )
}

export default Card
