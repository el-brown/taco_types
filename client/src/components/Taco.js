import React from 'react';

const Taco = (tacos) => {
  return (
    <div>
      <h1>A Single Taco {tacos.name}</h1>
      <p>It's ingredients{tacos.ingredients}</p>
      <p>A like button{tacos.likes}</p>
      <p>An edit button</p>
      <p>Optional - Reviews Link</p>
    </div>
  );
};

export default Taco;