import React, { useState, useEffect } from 'react';
import axios from "axios";


const Tacos = (props) => {
  const [theTacos, setTheTacos] = useState([]);

  useEffect (() => {
    getTacos()
  },[])

  const getTacos = async () => {
    try {
      let res = await axios.get("/api/tacos")
      setTheTacos(res.data)
    } catch (err) {
      alert("error occured getting tacos. Debug")
    }
  }
  return (
    <>
      <h1>Tacos Here</h1>
    </>
  )
}
export default Tacos