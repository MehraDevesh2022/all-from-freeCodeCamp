import React from 'react'

function List({items}) {

  return (
    <div className='grocery-list'>
   
       {items.map(item =>{
        const {id , title} = item
        return(
            <article className='grocery-item' key={id}>
              <p className='title'>{title}</p>

            </article>
        )
       })} 
    </div>
  )
}

export default List