import React, { useState } from 'react';

import PropTypes from 'prop-types';

const AddCategory = ({setCategories})=>{


    //State
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => setInputValue(e.target.value);


    const handleSubmit = (e) => {
        e.preventDefault();
        

        if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
            console.log('Submit hecho');
        }
     
    }

    

    return(

        <form className="header"   onSubmit= {handleSubmit}> 
                <input 
                    type="text"
                    placeholder="Busca un gift" 
                    value= {inputValue}
                    onChange= {handleInputChange}
                  
                
                />
        </form>
    )
}



AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
export default AddCategory;