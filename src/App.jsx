// App.jsx
import React, { useState } from 'react';
import EmployeeList from './EmployeeList';
import EmployeeForm from './EmployeeForm';

const App = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'joão', email: 'joao@exemplo.com', EPIs: ['Helmet'], activities: ['Welding'] },
  ]);

  const addEmployee = newEmployee => {
    setEmployees([...employees, { ...newEmployee, id: Date.now() }]);
  };

  return (
    <div>
      <h1>Gerencimento de funcionarios</h1>
      <EmployeeList employees={employees} />
      <EmployeeForm onSubmit={addEmployee} />
    </div>
  );
};

export default App;
