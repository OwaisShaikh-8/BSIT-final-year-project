import React from 'react'

const Card = ({heading,paragraph,className,source}) => {
  return (
    <div className={`${className} h-60 w-60 p-5 rounded-3xl text-white text-center flex flex-col items-center justify-center hover:scale-105 hover:shadow-xl`}>
  <h1 className='font-bold text-md mb-2'>{heading}</h1>
  <img className='h-20 w-auto mb-2' src={source} alt="card" />
  <p className='text-xs'>{paragraph}</p>
</div>

  )
}

export default Card
