class EmployeePage {
  constructor(page) {
    this.page = page;
    this.employeeManagementBtn = page.getByRole('button', { name: ' Employee Management 󰅂' });
    this.employeeLink = page.getByRole('link', { name: 'Employee', exact: true });
    this.departmentDropdown = page.getByLabel('Department');
  }

  async navigateToEmployeeManagement() {
    await this.employeeManagementBtn.waitFor();
    
    await this.employeeManagementBtn.click();

    await this.employeeLink.waitFor();
    await this.employeeLink.click();
  }

  async selectDepartment(deptValue) {
    await this.departmentDropdown.waitFor();
    await this.departmentDropdown.selectOption(deptValue);
  }

  async clearDepartmentSelection() {
    await this.departmentDropdown.waitFor();
    await this.departmentDropdown.selectOption('');
  }
}

module.exports = { EmployeePage };
