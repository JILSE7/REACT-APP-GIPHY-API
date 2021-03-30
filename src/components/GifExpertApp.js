import React, { useState } from 'react';

//Importando AddCategory
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = () =>{

  

    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = ()=>{
    //     //opcion con spread opreator
    //     // setCategories([...categories, 'Hook']);

    //     //2da opcion
    //     setCategories(categories => [...categories, 'Hook'])
    // }



    return(
        <>  
            <div className="header">
                <h1>GifExpertApp</h1>
                <AddCategory setCategories= {setCategories}/>
            </div>
            <hr />
        <ol>
            {categories.map((categoria) => 
            <GifGrid key= {categoria} categoria= {categoria}/>
            )}
        </ol>
        </>
    )
}


export default GifExpertApp;