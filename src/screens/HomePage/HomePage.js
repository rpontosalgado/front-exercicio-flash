import React from "react";
import { useHistory } from "react-router-dom";

import 'antd/dist/antd.css';
import { Button, Typography } from "antd";

import useRequestData from "../../hooks/useRequestData";
import { goToEmployeeList } from "../../routes/Coordinator";

import { CompanyNamesListContainer, HomeContainer } from "./styled";

const HomePage = () => {

  const history = useHistory();

  // const companiesData = useRequestData({}, "/company")
  // const companyNames = companiesData.companies;

  // const renderCompanyNamesButtonList = () => (
  //   companyNames.map(item => (
  //     <Button
  //       type="default"
  //       size="large"
  //       onClick={() => goToEmployeeList(history, item)}
  //     >
  //       { item }
  //     </Button>
  //   ))
  // );

  return (
    <HomeContainer>
      <Typography.Title level={3}>
        Selecione uma empresa para exibir as informações dos funcionários
      </Typography.Title>
      <CompanyNamesListContainer>
        <Button
          type="default"
          size="large"
          onClick={() => goToEmployeeList(history, "Empresa A")}
        >
          Empresa A
        </Button>
        <Button
          type="default"
          size="large"
          onClick={() => goToEmployeeList(history, "Empresa B")}
        >
          Empresa B
        </Button>
      </CompanyNamesListContainer>
    </HomeContainer>
  );
};

export default HomePage;