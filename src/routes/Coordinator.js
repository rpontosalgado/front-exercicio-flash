export const goToEmployeeList = (history, company) => {
  history.push(`/${company}`);
};

export const goBack = history => {
  history.goBack();
};