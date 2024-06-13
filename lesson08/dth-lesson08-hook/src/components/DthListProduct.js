import React from 'react'

export default function DthListProduct({rederDthProducts}) {
    // console.log("ListProduct: ",rederDthProducts); Kiểm tra dữ liểu từ app đẩy sang component
    const dthFormatter = new Intl.NumberFormat('vi-VN', { //format giá tiền
        style: 'currency', 
        currency: 'VND'
      });
    let dthTong=0;
    let dthElementProduct = rederDthProducts.map((dthProduct,index)=> {
        dthTong += dthProduct.dth_quantity*dthProduct.dth_price;
        return(
            <>
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{dthProduct.dth_productId}</td>
                    <td>{dthProduct.dth_productName}</td>
                    <td>{dthProduct.dth_quantity}</td>
                    <td>{dthFormatter.format(dthProduct.dth_price)}</td> 
                    <td>{dthFormatter.format(dthProduct.dth_quantity*dthProduct.dth_price)}</td>
                    <td>
                        <button className='btn btn-success mx-1'>
                            <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button className='btn btn-danger mx-1'>
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </td>
                </tr>
            </>
        )
    })
  return (
    <div>
      <h2 >Danh sách sản phẩm</h2>
      <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
               {dthElementProduct}
            </tbody>
            <tfoot>
                <tr>
                    <th colSpan={5} className='text-end'>Tổng cộng: </th>
                    <th colSpan={2} className='text-start'>{dthFormatter.format(dthTong)}</th>

                </tr>
            </tfoot>
      </table>
    </div>
  )
}
