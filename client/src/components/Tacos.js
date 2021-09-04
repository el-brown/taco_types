import React from 'react';
// import axios from "axios";
import Taco from "./Taco";


const Tacos = ({tacos}) => {

  return (
    <div>
      <h1>Tacos Here</h1>
      {tacos.map((taco) => <Taco key={taco.id} {...tacos}/>)}
    </div>
  );
};

export default Tacos