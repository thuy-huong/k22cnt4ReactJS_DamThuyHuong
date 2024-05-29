import React, { Component } from 'react';

class DthListProducts extends Component {
    render() {
        let {renderProducts} = this.props;
        let elementProduct = renderProducts.map((item,index) =>{
            return(
                <>
                    <tr key={index}>
                        <td>{item.dth_productId}</td>
                        <td>{item.dth_productName}</td>
                        <td>{item.dth_quantity}</td>
                        <td>{item.dth_price}</td>
                    </tr>
                </>
            )
        })
        return (
            <div>
                 <h2>Danh sách sản phẩm</h2>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Product Id</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elementProduct}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DthListProducts;