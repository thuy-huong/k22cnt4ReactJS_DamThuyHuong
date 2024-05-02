import React, { Component } from 'react';

class Form3DTH extends Component {
        constructor(props){
            super(props);
            this.state = {
                studentName: "Đàm Thúy Hường",
                age: "19",
                course: "Dth_HTML5",
                gender: true
            }
        }
    
        DthHandlChange = (event) =>{
            let name = event.target.name;
            let value = event.target.value;
            this.setState({
                [name]:value
            })
        }
        dthHandlSubmit = (event) =>{
            event.preventDefault();
            console.log(this.state);
            this.props.onSubmit(this.state)
        }
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>Student Name: </label>
                        <input  name='studentName'
                                value={this.state.studentName}
                                onChange={this.DthHandlChange}/>
                    </div>
                    <div>
                        <label>Age: </label>
                        <input  name='age'
                                value={this.state.age}
                                    onChange={this.DthHandlChange}/>
                    </div>
                    <div  onChange={this.DthHandlChange}>
                        <label>Gender</label>
                        <input type="radio" value={true} name="gender"  checked={(this.state.gender===true)?'checked':''}/> Nữ
                        <input type="radio" value={false} name="gender"  checked={(this.state.gender===false)?'checked':''}/> Nam
                    </div>
                    <div >
                        <label>Course</label>
                        <select name='course'
                                value={this.state.course}
                                onChange={this.DthHandlChange}>
                            <option value={"Dth-HTML5"}>Dth-HTML5</option>
                            <option value={"Dth-CSS3"}>Dth-CSS3</option>
                            <option value={"Dth-JS"}>Dth-JS</option>
                            <option value={"Dth-RS"}>Dth-Reactjs</option>
                        </select>
                    </div>
                    <button onClick={this.dthHandlSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form3DTH;