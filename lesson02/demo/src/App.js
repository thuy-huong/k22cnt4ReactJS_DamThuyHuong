import logo from './logo.svg';
import './App.css';
import Func_jsx_DamThuyHuong from './components/Func_jsx_DamThuyHuong';
import Class_DamThuyHuong from './components/Class_DamThuyHuong';

function App() {
  return (
    <div className="App">
      <h1>Demo JSX</h1>
      <Func_jsx_DamThuyHuong/>
      <Func_jsx_DamThuyHuong fullName = "Đàm Thúy Hường" age = "20"/>

      <Class_DamThuyHuong/>
      <hr/>
      <Class_DamThuyHuong info = "Học ReactJS" time="11"/>
    </div>
   
  );
}

export default App;
