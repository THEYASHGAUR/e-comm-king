import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function CardComp() {
    return (
        <div className='h-96 w-[800px] bg-gray-200 m-3 rounded-lg p-6 flex'>
            <div className='bg-pink-400 h-80 w-[300px] flex items-center justify-center'>
                <p>Product Image</p>
            </div>
            {/* details */}
            <div className='p-5'>
                <button
                    type="button"
                    className="inline-flex items-center rounded-md bg-white px-10 ml-96 py-5 text-sm font-semibold text-black"
                >
                    E-commerce Name
                    
                </button>
                <h1>Details of the product</h1>
                <p>Product Name</p>
                <p>quality : 100% genuine</p>
                <p>quality : 100% genuine</p>
                <p>quality : 100% genuine</p>
                <p>quality : 100% genuine</p>
                

                <div>
                    <button
                        type="button"
                        className="inline-flex items-center rounded-md bg-black px-32 py-5 text-sm font-semibold text-white hover:bg-black/80"
                    >
                        Order Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                </div>
            </div>


        </div>
    )
}
