import React from 'react'

export default function Dth(props){
    return(
        <div>
            <h1>Welcome temple to me</h1>
            <p>Họ Và Tên: {props.hoten}</p>
            <p>Khoa: {props.khoa}</p>
            <p>Lớp: {props.lop}</p>
            <p>Số điện thoại: {props.email}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}