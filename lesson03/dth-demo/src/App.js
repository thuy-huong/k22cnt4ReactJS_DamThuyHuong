
import './App.css';
import DTH_ClassComp from './components/DTH_ClassComp';
import DTH_FuncDemo from './components/DTH_FuncDemo';

function App() {
  //Khai báo biên đối tượng
  const users = {
    userName: "K22CNT4",
    password: "123456a@",
    fistName: "Đàm Thúy",
    lastName: "Hường"
  }

  //Khai báo đối tượng hàm
  function formatName(user){
    return <h2>Xin chào, {user.fistName} {user.lastName} </h2>;
  }

  return (
    <div className="App">
      {/* Biểu thúc jsx */}
      <div>
        <p>Fullname: {users.fistName} {users.lastName} </p>
        {formatName(users)}
      </div>

      {/* sử dụng dunctiono component */}
      <div>
        <DTH_FuncDemo/>
      {/* Sử dụng Func_Comp có props */}
      <DTH_FuncDemo userName = "DTH" fullName = "Đàm Thúy Hường" age = "19"/>
      </div>

      {/* Sử dụng class component */}
      <div>
        {/* Dùng khồn sử dụng props */}
        <DTH_ClassComp/>  
        {/* Sử dụng props */}
        <DTH_ClassComp company="Fit-NTU - K22CNT4" course = "ReactJs"/> 
      </div>
    </div>
  );
}

export default App;
