import "./App.css";
import React, {useState, useEffect} from 'react';
import Tacos from "./components/Tacos";
import axios from 'axios';


const App = () => {
const [tacos, setTheTacos] = useState([])

useEffect(() => {
  getTacos()
}, []);

const getTacos = async () => {
  try {
    let res = await axios.get("/api/tacos")
    setTheTacos(res.data)
  } catch (error) {
    alert("NOOOOOOOOOOOOOO. It didn't work.")
  };
}; 

return (
  <div className="App">
   <Tacos tacos = {tacos}/>
  </div>
);
};

export default App;