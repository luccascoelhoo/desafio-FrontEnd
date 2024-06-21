import PropTypes from 'prop-types'; // Importe PropTypes para validar as props

const EmployeeList = ({ employees, onEdit }) => {
  return (
    <div>
      <h2>Lista de funcionarios</h2>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            {employee.name} - {employee.email}
            <button onClick={() => onEdit(employee)}>Editar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

EmployeeList.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      EPIs: PropTypes.arrayOf(PropTypes.string).isRequired,
      activities: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired, // Adicione a validação das props employees e onEdit
  onEdit: PropTypes.func.isRequired,
};

export default EmployeeList;
