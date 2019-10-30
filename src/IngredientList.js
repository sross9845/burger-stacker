import React from 'react';

const IngredientList = (props) => (
  <>
    <h2>Add your Ingredients:</h2> 
    {props.ingredients.map((ingredient, i) =>
        <p key={i}>{ingredient.name}<button onClick={(e) => 
        {props.addIngredient(e, i)}}>Add</button></p>)}            
  </>
)

export default IngredientList;