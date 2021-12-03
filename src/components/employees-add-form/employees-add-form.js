import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    // создаем 2 пустых св-ва
    this.state = {
      name: '',
      salary: '',
    };
  }

  onValueChange = (e) => {
    this.setState({
      // чекаем св-во (e.target.name) где вводятся данные и
      // записываем в него значение (e.target.value)
      [e.target.name]: e.target.value,
    });
  };

  render() {
    // деструктуризация
    const { name, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
