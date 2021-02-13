import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "antd";
import { useRequestData } from "../../hooks/useRequestData";
import { goToEmployeeList } from "../../routes/Coordinator";

const HomePage = () => {

  const history = useHistory();

  const companiesData = useRequestData({}, "/company")
  const companyNames = companiesData.companies;

  const renderCompanyNamesButtonList = () => (
    companyNames.map(item => (
      <Button
        type = "default"
        onClick = {() => goToEmployeeList(history, item)}
      >
        { item }
      </Button>
    ))
  );

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