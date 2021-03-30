import React from 'react';
import PropTypes from 'prop-types';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import Spinner from './Spinner'
// import getGifs from '../helpers/getGifs';

const GifGrid = ({categoria})=>{

    
    const {data: imagenes, loading} = useFetchGifs(categoria);

    let componente;
    if(loading){
    componente = <Spinner/>    
    }
    

    return(
        <>
            <h3>{categoria}</h3>

            {componente}
           
    
            <div className="cards">
                {imagenes.map(image =><GifGridItem  key= {image.id} {...image}/>)}
            </div>
 
        
        </>

        
    )



}


GifGrid.propTypes = {
    categoria: PropTypes.string.isRequired
}

export default GifGrid;