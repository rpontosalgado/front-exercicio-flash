import React from "react";
import { useHistory, useParams } from "react-router-dom";

import { Button, Table, Typography } from "antd";

import {
  EmployeeListPageContainer,
  EmployeeListTableWrapper
} from "./styled";
import useRequestData from "../../hooks/useRequestData";

import { columns } from "../../constants/tableConfig";
import { goBack } from "../../routes/Coordinator";

const EmployeeListPage = () => {

  const history = useHistory();

  const { company } = useParams();

  const employeeData = useRequestData({}, `/employee/${company}`);
  const employeeList = employeeData.employees || [];

  const employees = employeeList.length && employeeList.map(item => {
    
    item.key = item._id;

    return item;
  });

  return (
    <EmployeeListPageContainer>
      <Typography.Title level={3}>{ company }</Typography.Title>
      <EmployeeListTableWrapper>
        <Table columns={ columns } dataSource={ employees } />
      </EmployeeListTableWrapper>
      <Button
        type="primary"
        size="large"
        onClick={ () => goBack(history) }
      >
        Voltar
      </Button>
    </EmployeeListPageContainer>
  );
};

export default EmployeeListPage;