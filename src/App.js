import React from 'react';
import './App.css'
import Dinner from './dinner.js';

// stateless component
function App() {
  return (
    <div className="App">
      {/* calling component:reusability,declarative */}
      <Dinner dishName="Karahi" sweetDish="Kheer" />
      <hr />
      <Dinner dishName="Biryani" sweetDish="Jaleebi" />
      <hr/>
      <Dinner dishName="Nihari" sweetDish="Gajar ka Halwa" />
      {/* <Dinner></Dinner> */}
    </div>
  );
}

export default App;
