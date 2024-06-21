import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types'; // Importe PropTypes para validar as props

const EmployeeForm = ({ onSubmit }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Obrigatório'),
    email: Yup.string().email('Fomrato de Email invalido').required('Obrigatório'),
    EPIs: Yup.array().of(Yup.string().required('EPI Obrigatorio')),
    activities: Yup.array().of(Yup.string().required('Atividade Obrigatório')),
  });

  return (
    <Formik
      initialValues={{ name: '', email: '', EPIs: [''], activities: [''] }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      <Form>
        <label htmlFor="name">Nome:</label>
        <Field type="text" id="name" name="name" />
        <ErrorMessage name="name" component="div" />

        <label htmlFor="email">Email:</label>
        <Field type="email" id="email" name="email" />
        <ErrorMessage name="email" component="div" />

        <label htmlFor="EPIs">EPIs (Equipamentos de Proteção Individual):</label>
        <Field type="text" id="EPIs" name="EPIs[0]" />
        <ErrorMessage name="EPIs[0]" component="div" />

        <label htmlFor="activities">Atividade:</label>
        <Field type="text" id="activities" name="activities[0]" />
        <ErrorMessage name="activities[0]" component="div" />

        <button type="submit">Adicionar Funcionário</button>
      </Form>
    </Formik>
  );
};

EmployeeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired, // Adicione a validação da prop onSubmit
};

export default EmployeeForm;
