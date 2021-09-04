import React, {useState, useEffect} from 'react';
import axios from "axios";
import Taco from "./Taco";


const Tacos = (props) => {
  const [tacos, setTacos] = useState([])
  
  useEffect(() => {
    getTacos()
  }, []);
  
  const getTacos = async () => {
    try {
      let res = await axios.get("/api/tacos")
      setTacos(res.data)
    } catch (error) {
      alert("NOOOOOOOOOOOOOO. It didn't work.")
    };
  }; 

  const renderTacos = () => {
      return tacos.map((t) => <Taco key={t.id} {...t} />);
  };

  
  return (
    <div className="App">
     {renderTacos()}
    </div>
  );
  };
  
  export default Tacos;
