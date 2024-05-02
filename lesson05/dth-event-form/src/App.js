import React, { Component } from 'react';
import DthForm1 from './Conmponents/DthForm1';
import DthForm2 from './Conmponents/DthForm2';
import Form3DTH from './Conmponents/Form3DTH';




class App extends Component {
  dthSubmit = (param)=>{
    console.log("App:", param);
  }
  render() {
    return (
      <div>
        <h1>Controlled conmponent ReactJS form</h1>
        <DthForm1/>
        <DthForm2/>
        <hr/>
        <Form3DTH onSubmit={this.dthSubmit}/>
      </div>

    );
  }
}

export default App;