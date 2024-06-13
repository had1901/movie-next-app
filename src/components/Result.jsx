import React from 'react'
import Card from './Card'

function Result({ result }) {
  return (
    <div className='max-w-6xl py-3 mx-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
        {
            result.map((item, index) => (
                <Card key={item.id} data={item} />
                    
            ))
        }
    </div>
  )
}

export default Result