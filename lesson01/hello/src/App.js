import logo from './logo.png';
import './App.css';
import Dth from './components/dth';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      </header>
      <Dth hoten="Đàm Thúy Hường" Khoa="CNTT" lop="K22CNT4" sdt="0962169464" email ="thuyhuong31804@gamil.com" />
    </div>
  );
}

export default App;
