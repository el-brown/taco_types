import axios from 'axios';
import React, { useState } from 'react';
import TacoForm from './TacoForm';
import { useHistory } from "react-router";
import Reviews from './Reviews';

const Taco = (props) => {
  const {id, name, ingredients, likes, updateTaco, deleteTaco} = props
  const [showForm, setShowForm] = useState()

  const history = useHistory();

  const handleDelete = async (id) => {
    let res = await axios.delete(`api/tacos/${id}`)
    deleteTaco(res.data.id)
}

  return (
    <div className="cards">
      <h2>{name}</h2>
      <div className="ingredients">
      <p>Ingredients: {ingredients}</p>
      </div>
      <div className="buttons">
      {/* <p><button>Like</button> {likes}</p> */}
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
      <p><button onClick={() => history.push(`/${id}/Reviews`, {id})}>Reviews</button></p>
      </div>
    </div>
  );
};

export default Taco;