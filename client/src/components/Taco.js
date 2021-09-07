import axios from 'axios';
import React, { useState } from 'react';
import TacoForm from './TacoForm';

const Taco = ({id, name, ingredients, likes, updateTaco, deleteTaco}) => {
  const [showForm, setShowForm] = useState()

const handleDelete = async (id) => {
    let res = await axios.delete(`api/tacos/${id}`)
    deleteTaco(res.data.id)
}

  return (
    <div className="cards">
      {console.log(id)}
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
      <p><button onClick={() => handleDelete(id)}>Delete</button></p>
      <p>Optional - Reviews Link</p>
    </div>
  );
};

export default Taco;