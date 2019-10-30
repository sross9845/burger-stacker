import React from 'react';

const Burger = (props) => (
    <>
      <h1><u>Make a Burger!</u></h1>  
      
      {props.chosenIngredients.map((chosenIngredient, i) =>  
      <p key={i} style={{backgroundColor: chosenIngredient.color}}>{chosenIngredient.name}</p>)}            
      
      <button onClick={props.removeIngredients}>Remove Ingredients</button>
    </>
)
export default Burger;