import React, { useEffect, useState } from 'react'
import { getCollectionData, getFeaturedData } from '../utils/apiFunctions'
import Link from 'next/link'
import Image from 'next/image'
import Loader from './Loader'

const FilmsSection = () => {
  const [films, setFilms] = useState([])

  useEffect(() => {
      
    getFeaturedData('films').then((val)=>{
      var ff=[]
      val.map((v)=>{
        if((Date.now())>v.releaseDateTimestamp)

        ff.push(v)

      })
      setFilms(ff)
    })
}, [])


function toDateTime(date) {
  var t = new Date(1970, 0, 1);
  
  t.setSeconds(date/1000);
  
 var year= t.getFullYear()

  return year;
}


  return (
    <section className="">
        <div className="mt-8">
            <h2 className="mb-4 text-xl ml-20 text-text-secondary font-semibold lg:mb-8 md:text-xl lg:text-2xl">
              Latest films...
                </h2>
          <div className='grid grid-cols-4 gap-3 p-4'>
          {films.length!=0?(
               films.map((item)=>{

                return(
                 <div key={item.id}>
                  <div  key={item.id} className="container p-3 hover:cursor-pointer">
               <Link href={'/film/'+item.id}>
                <div>
                  <div className='flex justify-center items-center'>
                   <Image width='200' height='250' src={item.posterURL}
               className='rounded-md border-4 border-text-primary' alt=""/>
                  </div>

                  <div className='pt-4'>
                  <p className="mb-2 flex justify-center font-bold text-text-primary lg:mb-4 text-md lg:text-xl">
                   {item.title}</p>
                  
                   <p className="mb-2 flex justify-center font-light text-text-primary lg:mb-4 text-sm lg:text-lg">
                   {toDateTime(item.releaseDateTimestamp)}</p>
                   

                  </div>
               


                </div>
            </Link>

            </div>
                 </div>
                )
               })
            ):(<>
            <Loader/>
            </>)
          }

          </div>

            
            
        </div>
    </section>

  )
}

export default FilmsSection