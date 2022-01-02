import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category}) => {
   

    const {data:images ,loading} = useFetchGifs( category );

   

    return (
        <>
        <h3 className="card animate__animated animate__zoomIn"> {category} </h3>

        {loading && <p>Loading...</p>}

        <div className="card-grid">
               {
                images.map((img) =>
                    <GifGridItem 
                    key={img.id}
                    { ...img } //este spread trae cada uno de los atributos independientes de img, es decir id, title y url
                    />    
                )
                }

        </div>
        </>
    )
}
