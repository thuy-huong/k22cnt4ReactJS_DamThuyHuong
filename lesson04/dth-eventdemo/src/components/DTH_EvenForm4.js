import React, { Component } from 'react';

class DTH_EvenForm4 extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"Thúy Hường"
        }
    }
    handleGetName = () => {
        alert(this.props.name);
    }
    render() {
        return (
            <div className='alert alert-info'>
                <h2>Xử lý lấy dữ liệu từ props</h2>
                <button onClick={this.handleGetName}>Lấy tên</button>
                <h2>WElcome to, {this.state.name}</h2>
            </div>
        );
    }
}

export default DTH_EvenForm4;