import React from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Gear = () => {
  const items = [
    {
      image: '/gear-m-1.png',
      alt: "Men's TechKnit Ultra",
      title: 'Nike Dri-FIT ADV TechKnit Ultra',
      price: '₹ 3 895',
      description: [`Men's Short-Sleeve`, 'Running Top'],
    },
    {
      image: '/gear-m-2.png',
      alt: "Men's Challenger",
      title: 'Nike Dri-FIT Challenger',
      price: '₹ 3 895',
      description: [`Men's 18cm (approx.) 2`, '-in-1 Versatile Shorts'],
    },
    {
      image: '/gear-w-1.png',
      alt: "Women's Run Division",
      title: 'Nike Dri-FIT ADV Run Division',
      price: '₹ 2 495',
      description: [`Women's Long-Sleeve`, 'Running Top'],
    },
    {
      image: '/gear-w-2.png',
      alt: "Women's Fast",
      title: 'Nike Fast',
      price: '₹ 3 795',
      description: [`Women's Mid-Rise 7/8 Running`, 'Leggings with Pockets'],
    },
  ]

  return (
    <div>
      <div className='mt-20 mb-7'>
        <span className='text-xl font-semibold px-10 lg:px-16'>Gear Up</span>
      </div>

      <div className='flex justify-between px-10 lg:px-20 flex-wrap'>
        
        {items.map((item, index) => (
          <div key={index} className={`flex gap-x-4 ${index % 2 === 0 ? 'items-center' : ''}`}>
            
            <div>
              <div className='flex items-center mb-2 opacity-0'>
                <span>shop</span>
                <div className='p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800 mx-3'>
                  <ChevronLeft />
                </div>
                <div className='p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800'>
                  <ChevronRight />
                </div>
              </div>

              <Image
                src={item.image}
                alt={item.alt}
                width={280}
                height={250}
              />

              <div className='flex justify-between items-center px-2 pt-2 flex-wrap'>
                <div className='text-xs font-bold pr-2'>{item.title}</div>
                <div className='text-sm'>{item.price}</div>
              </div>

              <div>
                {item.description.map((line, idx) => (
                  <span key={idx} className='text-sm text-gray-700 px-2'>{line}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gear
