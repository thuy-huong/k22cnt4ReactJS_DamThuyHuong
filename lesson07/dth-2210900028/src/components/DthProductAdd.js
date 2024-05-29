import React, { Component } from 'react';

class DthProductAdd extends Component {
    constructor(props){
        super(props); 
        this.state = {
            dth_productId : '',
            dth_productName : '',
            dth_quantity : '',
            dth_price : ''
        }
    }
    dthHandleChange = (event)=>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]:value
        })
    }
    dthHandleSubmit = (ev)=>{
        ev.preventDefault();

        this.props.onSubmit(this.state);
    }
    render() {
        return (
            <div>
                <form className='col-md-6'>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            Product Id
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            name = 'dth_productId'
                            value={this.state.dth_productId}
                            onChange={this.dthHandleChange}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon2">
                           Product Name
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            name = 'dth_productName'
                            value={this.state.dth_productName}
                            onChange={this.dthHandleChange}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon3">
                            Quantity
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            name = 'dth_quantity'
                            value={this.state.dth_quantity}
                            onChange={this.dthHandleChange}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon3">
                            price
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            name = 'dth_price'
                            value={this.state.dth_price}
                            onChange={this.dthHandleChange}
                        />
                    </div>
                    <button className='btn btn-success ' onClick={this.dthHandleSubmit}>Ghi lại</button>
                </form>
            </div>
        );
    }
}

export default DthProductAdd;