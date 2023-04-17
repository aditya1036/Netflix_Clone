import useBillboard from '@/hooks/useBillboard'
import React from 'react'

const Billboard = () => {
const {data : movie} = useBillboard();


  return (

    <div className='relative h-[56.25vw]'>
        <video 
        className='
            w-full
            h-[56.25vw]
            object-cover brightness-[60%]
        '
        autoPlay
        muted
        loop
        poster={movie?.thumbnailurl} 
        src={movie?.videoUrl}>
        </video>
    </div>

  )
}

export default Billboard