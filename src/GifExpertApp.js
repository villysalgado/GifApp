import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    
    const [categories, setCategories] = useState(['OnePunch'])

   /*  const handleAdd = () => {
        setCategories([...categories, 'DeathNote'])
    }  */


    return (
        <>
            <h2>GifApp</h2>
            <AddCategory setCategories={setCategories} />
            {/* <button onClick={handleAdd} className="btn btn-primary">
                Agregar
            </button> */}

            <hr />

            <ol>
                {
                    categories.map(category => 
                        <GifGrid 
                        key={category}  
                        category={ category }
                        />
                    )
                }
            </ol>
        </>
    )
}
