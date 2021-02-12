import React from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header>
        <p>
          Selecione uma empresa para exibir as informações dos funcionários
        </p>
      </header>
      <main>
        <Router />
      </main>
    </BrowserRouter>
  );
}

export default App;
