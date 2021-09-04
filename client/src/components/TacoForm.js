import React, { useState }from 'react';

const TacoForm = (props) => {
  const { id, addTaco} = props
  const [tacoName, setTacoName] = useState("")
  const [tacoIngredients, setTacoIngredients] = useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addTaco({id:Math.random(), name:tacoName, ingredients:tacoIngredients});
    setTacoName("");
    setTacoIngredients("");
  }


  return (
    <div className="form">
      <h2>{props.id ? "Change this " : "Add a "}Taco</h2>
      <form className="tacoform" onSubmit={handleSubmit}>
        <p>Type of Taco</p>
        <input 
        value={tacoName}
        onChange={(e) => {
          setTacoName(e.target.value)
        }}
        />
        <p>Ingredients</p>
        <input
        value={tacoIngredients}
        onChange={(e) => {
          setTacoIngredients(e.target.value)
          }}
          />
        <button type="submit">{id ? 'Edit Taco' : 'New Taco'}</button>
      </form>
    </div>
  )
    
};

export default TacoForm