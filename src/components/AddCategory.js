import React, { useState } from 'react'
import PropTypes from "prop-types";


export const AddCategory = ({setCategories}) => {

  const [inputValue, setInputValue ] = useState(''); 

  const handleInputChange = (e) => {
    setInputValue ( e.target.value );

    // console.log('handleInputChange llamado') // este lo dejo para hacer pruebas test de que funciona al cambiar. ( e.target.value ) = en el test vemos como llamar a los elementos e.targe.value, porque sino nos va a tirar error

  }

  const handleSubmit = (e) => {
      e.preventDefault();

      console.log('handleSubmit', inputValue);

      if( inputValue.trim().length > 2){
        setCategories( cats => [ inputValue, ...cats]);
        setInputValue('');
      }
  }

  
  return (
    <form onSubmit={ handleSubmit }>
      <p> { inputValue } </p>
      <input 
          type="text" 
          value={ inputValue }
          onChange={ handleInputChange }
      /> 
    </form>
  )
}
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
