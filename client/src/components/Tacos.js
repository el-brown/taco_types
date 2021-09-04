import React, {useState} from 'react';
// import axios from "axios";
import Taco from "./Taco";


const Tacos = (props) => {
  const [tacos, setTheTacos] = useState([])

//   useEffect(() => {
//     getTacos()
//   }, []);

//   const getTacos = async () => {
//     try {
//       let res = await axios.get("/api/tacos")
//       setTheTacos(res.data)
//     } catch (error) {
//       alert("NOOOOOOOOOOOOOO. It didn't work.")
//     };
//   }; 

//   return (
//     <div className="App">
//      <Tacos tacos = {tacos}/>
//     </div>
//   );
// };

  return (
    <div>
      <h1>Tacos Here</h1>
      {/* {tacos.map((taco) => <Taco key={taco.id} {...taco}/>)} */}
    </div>
  );
};

export default Tacos