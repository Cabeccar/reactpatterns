import useControlledForm from './hooks/useControlledForm';

const TestForm = () => {
  const {formValues, handleChange, handleSubmit, resetForm} = useControlledForm(
    {
      name: '',
    },
  );

  const showData = values => {
    alert(JSON.stringify(values));
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit(showData)}>
      <input name="name" value={formValues.name} onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
};

export default TestForm;