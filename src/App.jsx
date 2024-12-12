import React, { useState } from "react";
import Inputs from "./Inputs";
import Card from "./Card";
import Left from "./Left"

function App() {

  const [cardDetails, setCardDetails] = useState({
    name: "",
    cardNum: "",
    month: "",
    year: "",
    cvc: "",
  })

  return (
    <div className="app">
      <Left/>
      <Card details={cardDetails}/>
      <Inputs setDetails={setCardDetails}/>
    </div>
  );
}

export default App;
