import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
  }

  // 1) term - данные которые ввел пол-тель
  // 2) устанавливает состояние в SearchPanel 
  // 3) передаем это состояние в метод компонента app.js 
  // (другими словами поднятие локального состояние родителю) 
  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({term})
    this.props.onUpdateSearchApp(term);
    } 

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
        value={this.state.term}
        onChange={this.onUpdateSearch}
      />
    );
  }
}

export default SearchPanel;
