import React from 'react';

const GifGridItem = ({title,url})=>{

    return(

            <div className='card animate__animated animate__bounceInUp'>
                <h4>{title}</h4>
                <img src= {url} alt={title}/>
            </div>
   

    )

}



export default GifGridItem