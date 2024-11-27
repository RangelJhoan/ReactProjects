import React, { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import { Sub } from "./types";
import { getAllSubs } from "./services/getAllSubs";

function App() {
  // Simulate the fetch execution to get the subs list
  const [subs, setSubs] = useState<Array<Sub>>([]);
  useEffect(() => {
    getAllSubs().then(setSubs);
  }, []);

  const handleNewSub = (newSub: Sub) => {
    setSubs([...subs, newSub]);
  };

  return (
    <div className="App">
      <h1>Midu Subs</h1>
      <List subs={subs} />

      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
