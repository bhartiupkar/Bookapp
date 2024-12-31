import React from 'react'
import Cards from './Cards.jsx'
import list from './../../public/list.json'
import { Link  } from 'react-router-dom'
export default function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className=' items-center justify-center text-center'>
          <h1 className='mt-16 text-2xl font-semibold md:text-4xl'>Keys tell React which array item each <span className='text-pink-500'>component</span></h1>
          <p className='mt-10'>Greetings from BufferedReader, the bi-annual magazine of the CSE Department, IIT (ISM) Dhanbad!

            Have you heard about our Student Achievement Section? Though a recent addition, this section has quickly become a favorite among our readers, shining a spotlight on the remarkable accomplishments of our talented peers.

            Now, it’s your chance to take center stage! Whether it’s a groundbreaking project, a competition victory, an internship experience, or any achievement you’re proud of, this is your opportunity to share your journey and inspire others.

           </p>
           <Link to="/" ><button className='bg-pink-500 border-2 border-black mt-10 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button></Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          
          {  list.map((item)=>(
              <Cards key={item.id} item={item}/>
            ))}
        </div>
      </div>
    </>
  )
}
