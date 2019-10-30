import React from 'react';
import IngredientList from './IngredientList';
import Burger from './Burger';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [  
      {name: 'Kaiser Bun', color: 'saddlebrown'},
      {name: 'Sesame Bun', color: 'sandybrown'},
      {name: 'Gluten Free Bun', color: 'peru'},
      {name: 'Lettuce Wrap', color: 'olivedrab'},
      {name: 'Beef Patty', color: '#3F250B'},
      {name: 'Soy Patty', color: '#3F250B'},
      {name: 'Black Bean Patty', color: '#3F250B'},
      {name: 'Chicken Patty', color: 'burlywood'},
      {name: 'Lettuce', color: 'lawngreen'},
      {name: 'Cheese', color: 'yellow'},
      {name: 'Tomato', color: 'tomato'},
      {name: 'Bacon', color: 'maroon'},
      {name: 'Onion', color: 'lightyellow'}
    ],
    stack: []
  }
  
  }
  
  addIngredient = (e, i) => {
    e.preventDefault();
    const stackItems = this.state.stack; 
    stackItems.unshift(this.state.ingredients[i]);
    this.setState({
      stack: stackItems
    })
  }
  
  removeIngredients = (e) => {
    e.preventDefault();
    this.setState({
      stack: []
    })
  }
  
  render() {
    return(
      <>
        <div id='ingredients'>
          <IngredientList ingredients={this.state.ingredients} addIngredient={this.addIngredient} />
        </div>
        
        <div id='burgerlist'>
          <Burger chosenIngredients={this.state.stack} removeIngredients={this.removeIngredients}/>
        </div>
      </>  
    )
  }
}

export default App;