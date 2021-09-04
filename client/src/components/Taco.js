import React from 'react';

const Taco = ({name, ingredients, likes}) => {

  return (
    <div>
      <h2>{name}</h2>
      <p>Ingredients: {ingredients}</p>
      <p><button>Like</button> -{likes}-</p>
      <p><button>Edit</button></p>
      <p><button>Delete</button></p>
      <p>Optional - Reviews Link</p>
    </div>
  );
};

export default Taco;