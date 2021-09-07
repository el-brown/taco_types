import React from "react";
import tacos from "./tacos.jpg"

const About = () => {
  return (
    <div>
      <h1 className="App-header">About</h1>
        <div className="about-content">
        <img src={tacos} height="400px" alt="A plate of tacos"/>
          <p className="article">According to <a href="//https://en.wikipedia.org/wiki/Taco">Wikipedia</a>, the origins of the taco are not precisely known, and etymologies for the culinary usage of the word are generally theoretical.[1][2] Taco in the sense of a typical Mexican dish comprising a maize tortilla folded around food is just one of the meanings connoted by the word, according to the Real Academia Española, publisher of Diccionario de la Lengua Española.[3] This meaning of the Spanish word "taco" is a Mexican innovation,[2] but the word "taco" is used in other contexts to mean "wedge; wad, plug; billiard cue; blowpipe; ramrod; short, stocky person; [or] short, thick piece of wood."[3] The etymological origin of this sense of the word is Germanic and has cognates in other European languages, including the French word "tache" and the English word "tack."[4]</p>
       </div>
    </div>
  )
};

export default About;