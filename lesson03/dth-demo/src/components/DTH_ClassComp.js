import React, { Component } from 'react';

class DTH_ClassComp extends Component {
    constructor(props){
        super(props);
        //Tạo đối tượng dữ liệu
        this.state = {
            firstName: "Đàm Thúy",
            lastName: "Hường",
            username: "K22CNT4"
        }
    }
    //arrow function
    Member = (props)=>{
        return(
            <div className='alert alert-success'>
                <h3>Xin chào: {props.fullName} - Bạn đã {props.age} tuổi </h3>
            </div>
        );
    }
    ListMember =()=>{
        return(
            <>

            <this.Member fullName="Nguyễn Văn A" age="19"/>
            <this.Member fullName="Nguyễn Văn B" age="20"/>
            <this.Member fullName="Nguyễn Văn C" age="21"/>
            <this.Member fullName="Nguyễn Văn D" age="22"/>
        </>
        );
        
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Class Component Demo</h2>
                <hr/>
                <h3> Dữ Liệu trong state </h3>
                <h4> Xin chào: {this.state.firstName} {this.state.lastName} </h4>
                <hr/>
                <h3>Dữ liệu từ props</h3>
                <p>Company: {this.props.company} </p>
                <p>Course: {this.props.course} </p>
                <hr/>
                <this.Member fullName="Đàm Thúy Hường" age="19"/>
                <hr/>
                <this.ListMember/>
            </div>
        );
    }
}

export default DTH_ClassComp;