import React from "react";
import { useHistory } from "react-router-dom";

import { Button, Typography } from "antd";

import useRequestData from "../../hooks/useRequestData";
import { goToEmployeeList } from "../../routes/Coordinator";

import { CompanyNamesListContainer, HomeContainer } from "./styled";

const HomePage = () => {

  const history = useHistory();

  const companyData = useRequestData({}, "/company")
  const companyNames = companyData.companies;

  const renderCompanyNamesButtonList = () => (
    companyNames.map(item => (
      <Button
        key={ item }
        type="default"
        size="large"
        onClick={ () => goToEmployeeList(history, item) }
      >
        { item }
      </Button>
    ))
  );

  return (
    <HomeContainer>
      <Typography.Title level={3}>
        Selecione uma empresa para exibir as informações dos funcionários
      </Typography.Title>
      <CompanyNamesListContainer>
        { companyNames && renderCompanyNamesButtonList() }
      </CompanyNamesListContainer>
    </HomeContainer>
  );
};

export default HomePage;