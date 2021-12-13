import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../epmployees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'John C.', salary: 800, increase: false, rise: true, id: 1 },
        { name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2 },
        { name: 'Carl W.', salary: 15000, increase: false, rise: false, id: 3 },
      ],
      term: '',
      filter: 'all', // default filter status
    };
    this.maxId = 4; // добавляем id
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      // const index = data.findIndex((elem) => elem.id === id);
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // const newArr = [...before, ...after];

      // возвращает только те элементы id которых не совпадает с тем который нам пришел (на который был клик)
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  // ф-ция добавления нового сотрудника с полями name, salary.
  // 1) создаем новый объект, где maxId увелич. с каждым добавлением
  // 2) создаем копию массива с новым сотрудником
  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  // разворачиваем массим с объектами, создаем новый массив, пробегаемся по нему методом map и при условии равных id мы возвраещаем развернутый объект этого массива со св-вом increase в противоположном значении
  // onToggleRise = (id) => {
  //   this.setState(({ data }) => ({
  //     data: data.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, rise: !item.rise };
  //       }
  //       return item;
  //     }),
  //   }));
  // };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  // searching emp with input of term
  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1; // ищем на совпадение (введенная строка term) в имени (name), если такого нет, то условие не выполняется и выводит -1
    });
  };

  // принимает строку и устанавливает состояние внутри главного компонтента в app.js
  onUpdateSearchApp = (term) => {
    this.setState({ term });
  };

  // filter of employees by clicking filter
  filterEmp = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter((item) => item.rise);
      case 'greater1000':
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  // setting filter state
  onFilterSelect = (filter) => {
    this.setState({filter});
  }

  render() {
    const { data, term, filter } = this.state;
    const amountOfEmp = this.state.data.length;
    const increased = this.state.data.filter((item) => item.increase).length;
    // first arg of filterEmp is arr of the result of searching, then filter state
    const visibleData = this.filterEmp(this.searchEmp(data, term), filter);
    return (
      <div className="app">
        <AppInfo amountOfEmp={amountOfEmp} increased={increased} />
        <div className="search-panel">
          <SearchPanel onUpdateSearchApp={this.onUpdateSearchApp} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
        </div>
        <EmployeesList
        // вызов методов через контекст
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addItem} />{' '}
        {/* атрибут добавления нов сотрудника */}
      </div>
    );
  }
}

export default App;
