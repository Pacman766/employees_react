import './app-info.css';

const AppInfo = ({amountOfEmp, increased}) => {


  return (
    <div className="app-info" >
      <h1>Учет сотрудников в компании Keen</h1>
      <h2>Общее число сотрудников: {amountOfEmp} </h2>
      <h2>Премию получат: {increased} </h2>
    </div>
  );
};

export default AppInfo;
