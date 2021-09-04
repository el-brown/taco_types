import React, { useState } from 'react';
import TacoForm from './TacoForm';

const Taco = ({id, name, ingredients, likes, updateTaco}) => {
  const [showForm, setShowForm] = useState()



  return (
    <div className="cards">
      <h2>{name}</h2>
      <p>Ingredients: {ingredients}</p>
      <p><button>Like</button> -{likes}-</p>
      <p><button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Done" : "Edit"}</button></p>
        {showForm && (
          <TacoForm
            updateTaco={updateTaco}
            id={id}
            name = {name}
            ingredients = {ingredients}
          />
        )}
      <p><button>Delete</button></p>
      <p>Optional - Reviews Link</p>
    </div>
  );
};

export default Taco;