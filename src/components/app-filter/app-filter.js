import './app-filter.css';

const AppFilter = (props) => {
  // dynamic creating of buttons
  const buttonsData = [
    { name: 'all', label: 'Все сотрудники' },
    { name: 'rise', label: 'На повышение' },
    { name: 'greater1000', label: 'ЗП больше 1000$' },
  ];

  // inputing buttons data by checking if filter = name and then
  // if it true we change className of button to btn-light, else -
  // btn-outline-light
  const buttons = buttonsData.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light';
    return (
      <button
        className={`btn ${clazz}`}
        type="button"
        key={name}
        onClick={() => props.onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
