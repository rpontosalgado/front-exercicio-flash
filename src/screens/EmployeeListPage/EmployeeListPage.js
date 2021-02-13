import React from "react";
import { useParams } from "react-router-dom";

import { Table, Typography } from "antd";

import { EmployeeListPageContainer, EmployeeListTableWrapper } from "./styled";
import useRequestData from "../../hooks/useRequestData";

import { employeeList } from "../../constants/dataSource";
import { columns } from "../../constants/tableConfig";

const EmployeeListPage = () => {

  const { company } = useParams();

  // const employeeData = useRequestData({}, `/employee/${company}`);
  // const employeeList = employeeData.employees;

  const employees = employeeList.map(item => {
    item.key = item.identification;

    return item;
  })

  console.log(employees);

  return (
    <EmployeeListPageContainer>
      <Typography.Title level={3}>{ company }</Typography.Title>
      <EmployeeListTableWrapper>
        <Table columns={ columns } dataSource={ employees } />
      </EmployeeListTableWrapper>
    </EmployeeListPageContainer>
  );
};

export default EmployeeListPage