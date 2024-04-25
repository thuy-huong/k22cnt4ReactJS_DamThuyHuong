import React, { Component } from 'react';
//Xử lý sự kiện với props, state
class DTH_EventForm3 extends Component {
    constructor(props){
        super(props);
        //tạo đối tượng dữ liệu thông qua state
        this.state = {
            name:"Đàm Thúy Hường",
            job:"Dev soft"
        }
    }
    ///hàm xử lý sự kiện
    handleChangeName = (ev)=>{
        this.setState({
            name:"K22CNT4-ReactJS "
        })
    }
    handleChangeJob=()=>{
        this.setState({
            job:"Công nghệ phần mềm"
        })
    }
    render() {
        return (
            <div className='alert alert-primary'>
                <h2>Thay đổi dự liệu trong state</h2>
                <p>Dữ liệu: {this.state.name} - {this.state.job} </p>
                <button onClick={this.handleChangeName}>Thay đổi name</button>
                <button onClick={this.handleChangeJob}>Thay đổi job</button>
            </div>
        );
    }
}

export default DTH_EventForm3;