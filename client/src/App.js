import axios from 'axios';
import { useEffect, useState } from 'react';
// import { useEffect } from 'react';
import './App.css';
import Tacos from './components/Tacos';

function App() {
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