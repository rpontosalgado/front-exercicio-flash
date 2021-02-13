import React from "react";
import { Button } from "antd";

const HomePage = () => {

  return (
    <main>
      <h1>
        Selecione uma empresa para exibir as informações dos funcionários
      </h1>
      <section>
        <Button type="default">Empresa A</Button>
        <br />
        <Button type="default">Empresa B</Button>
      </section>
    </main>
  );
};

export default HomePage;