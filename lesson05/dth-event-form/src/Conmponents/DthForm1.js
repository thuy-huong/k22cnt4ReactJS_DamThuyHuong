import React, { Component } from 'react';

class DthForm1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentName: "Đàm Thúy Hường"
        }
    }
    //hàm sử lý xự kiện khi thay đổi dữ liệu tren text
    handlChange = (event) =>{
        this.setState({
            studentName: event.target.value,
        })
    }
    ///sự kiện submit form 
    handlSubmit = (ev) =>{
        console.log(ev);
        ev.preventDefault();
        alert(this.state.studentName)
    }
    render() {
        return (
            <div>
                <h2>Demo React Form - Text</h2>
                <form>
                    <label>Student Name: </label>
                    <input value={this.state.studentName}
                            onChange={this.handlChange}/>
                    <button onClick={this.handlSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default DthForm1;