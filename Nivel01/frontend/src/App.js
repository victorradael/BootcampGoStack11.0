import React, { useState } from "react";
import Header from "./components/Header";

function App() {
  const [projetcs, setProjects] = useState(["Dev Web", "Dev Mobile"]);

  function handleAddProject() {
    setProjects([...projetcs, `Novo Projeto ${Date.now()}`]);

    console.log(projetcs);
  }

  return (
    <>
      <Header title="Homepage" />
      <ul>
        {projetcs.map((projetc) => (
          <li key={projetc}>{projetc}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar Projeto
      </button>
    </>
  );
}

export default App;