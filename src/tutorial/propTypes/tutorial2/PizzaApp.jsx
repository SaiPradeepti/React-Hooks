import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { PizzaCard } from './PizzaCard';

function PizzaApp() {
  return (
    <PizzaCard
      name='Chicago Pizza'
    // name={1}
    // name= ''
    //   image="/images/chicago-pizza.jpg"
      image="https://github.com/karlhadwen/react-proptypes/blob/master/public/images/chicago-pizza.jpg?raw=true"
      desc="The pan in which it is baked gives the pizza its characteristically high edge which provides ample space for large amounts of cheese and a chunky tomato sauce."
      price={9}
    />
  );
}

export default PizzaApp;