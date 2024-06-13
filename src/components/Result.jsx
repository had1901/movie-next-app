import React from 'react'

function Result({ result }) {
  return (
    <div>
        {
            result.map((item, index) => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                </div>
            ))
        }
    </div>
  )
}

export default Result