import React from 'react';

const Taco = ({taco}) => {
  console.log(taco)
  return (
    <div>
      <h2>A Single Taco </h2>
      <p>It's ingredients:</p>
      <p>A like button</p>
      <p>An edit button</p>
      <p>Optional - Reviews Link</p>
    </div>
  );
};

export default Taco;