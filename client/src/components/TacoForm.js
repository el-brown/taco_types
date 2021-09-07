import React, { useState }from 'react';

const TacoForm = ({updateTaco, name, ingredients, id, addTaco}) => {
  const [tacoName, setTacoName] = useState(name ? name : "")
  const [tacoIngredients, setTacoIngredients] = useState(ingredients ? ingredients : "")
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateTaco({id:id, name:tacoName, ingredients:tacoIngredients});
    }else {
      addTaco({id:Math.random(), name:tacoName, ingredients:tacoIngredients});
    setTacoName("");
    setTacoIngredients("");
  }
}


  return (
    <div className="form">
      <h3>{id ? "Change this " : "Add a "}Taco</h3>
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
        <div className="newTacoButton">
        <button type="submit">{id ? 'Edit Taco' : 'New Taco'}</button>
        </div>
      </form>
    </div>
  )
    
};

export default TacoForm