import React, { Component } from 'react';

class DthForm2 extends Component {
    ///1. Khởi tạo 
    constructor(props){
        super(props);
        this.state = {
            course: "Dth-HTML5"
        }
    }
    ///3. sử lý sự kiện
    handlChange = (event) =>{
        this.setState({
            course:event.target.value
        })
    }
    dthHandlSubmit = (event) =>{
        event.preventDefault();
        alert(this.state.course)
    }

    render() {
        //2.tạo form
        return (
            <div>
                <form onSubmit={this.dthHandlSubmit}>
                    <label>Course</label>
                    <select value={this.state.course}
                            onChange={this.handlChange}>
                        <option value={"Dth-HTML5"}>Dth-HTML5</option>
                        <option value={"Dth-CSS3"}>Dth-CSS3</option>
                        <option value={"Dth-JS"}>Dth-JS</option>
                        <option value={"Dth-RS"}>Dth-Reactjs</option>
                    </select>
                    <input type="submit" value={"Submit"}/>
                </form>
            </div>
        );
    }
}

export default DthForm2;