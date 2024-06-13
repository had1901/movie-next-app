import React from 'react'
import Image from 'next/image'


function Loading() {
  return (
    <div>
        <Image src='spinner.svg' alt='loading' width={200} height={200}/>
    </div>
  )
}

export default Loading