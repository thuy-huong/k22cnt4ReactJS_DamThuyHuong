import React, { Component } from 'react';

class Class_DamThuyHuong extends Component {
    constructor(props){
        super(props);
        this.state={
            fullName:"Đàm Thúy Hường",
            class:"K22CNT4"
        }
    }
    users = {
        name:"Đàm Thúy Hường",
        age: 20
    }
    handleChange = (Event) =>{
        this.setState({
            fullName:"Lê Văn A",
        })
    }
    render() {
        return (
            <div>
                <h2>Class Component Demo</h2>
                {this.users.name} - {this.users.age}
                <hr/>

                <h3>{this.props.info}</h3>
                <h3>{this.props.time}</h3>
                <hr/>
                <h3>State:
                    Fullname: {this.state.fullName} - Class: {this.state.class}

                </h3>
                <button onClick={this.handleChange} >Change name</button>
            </div>
        );
    }
}

export default Class_DamThuyHuong;