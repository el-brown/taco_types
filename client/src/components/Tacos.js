import React, {useState, useEffect} from 'react';
import axios from "axios";
import Taco from "./Taco";
import TacoForm from './TacoForm';


const Tacos = (props) => {
  const [tacos, setTacos] = useState([])
  // const [showForm, setShowForm] = useState(false)
  // const [editTaco, setEditTaco] = useState(null)
  
  useEffect(() => {
    getTacos()
  }, []);
  
  const getTacos = async () => {
    try {
      let res = await axios.get("/api/tacos")
      setTacos(res.data)
    } catch (error) {
      alert("Ya didn't get the tacos.")
    };
  }; 

  const addTaco = async (taco) => {
    try {
      let res = await axios.post(`/api/tacos`, taco)
      setTacos([res.data, ...tacos]);
    } catch (error) {
      alert("Ya failed to add the taco")
    };
  };

  const updateTaco = async (taco) => {
    try {
      let res = await axios.put(`/api/tacos/${taco.id}`, taco)
      let newTacos = tacos.map((t) => (t.id === taco.id ? res.data : t));
      setTacos(newTacos)
    } catch (error) {
      
    }
  }

  const deleteTaco = (id) => {
    const filteredTacos = tacos.filter((t) => t.id !== id)
    setTacos(filteredTacos)
  }

  const renderTacos = () => {
      return tacos.map((t) => <Taco 
      updateTaco={updateTaco} 
      deleteTaco={deleteTaco}
      key={t.id} {...t} />);
  };

  return (
    <div className="App">
      <h1 className="App-header">Welcome to Tacos!</h1>
      <TacoForm updateTaco={updateTaco} addTaco={addTaco}/>
      {renderTacos()}
    </div>
  );
  };
  
  export default Tacos;
