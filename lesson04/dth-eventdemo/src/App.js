import React, { Component } from 'react';
import DTH_EventForm1 from './components/DTH_EventForm1';
import DTH_EventForm2 from './components/DTH_EventForm2';
import DTH_EventForm3 from './components/DTH_EventForm3';
import DTH_EvenForm4 from './components/DTH_EvenForm4';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Event from demo</h1>   
        <DTH_EventForm1/> 
        <DTH_EventForm2/>
        <DTH_EventForm3/>
        <DTH_EvenForm4 name = "Đàm Thúy Hường"/>
      </div>
    );
  }
}

export default App;