import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({data, onDelete}) => {

  // пробегаемся по каждому эл-ту массива data 
  // и возвращаем новый измененный массив
  const elements = data.map(item => {
    const {id, ...itemProps} = item; // частичная деструктуризация (вытаскиваем id)
    return (
      <EmployeesListItem 
      key={id} 
      {...itemProps} // подставляем id в виде ключа и далее все остальные св-ва
      onDelete={() => onDelete(id)}/>
    );
  });

  // вставляем новый массив в ul
  return (
    <ul className="app-list list-group">
      {elements} 
    </ul>
  );
};

export default EmployeesList;
