import React, { useState } from 'react'

export default function DthAddOrEditUsers() {
    const [dthUserName, setDthUserName] = useState('');
    const [dthPassword, setPassword] = useState('');
    const [dthEmail, setDthEmail] = useState('');
    const [dthPhone, setDthPhone] = useState('');

  return (
    <div>
        <h2>Thêm mới hoặc sửa thông tin User</h2>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
                UserName
            </span>
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                name='UserName'
                value={dthUserName}
                onChange={(ev)=>setDthUserName(ev.target.value)}
            />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
                Password
            </span>
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                name='Password'
                value={dthPassword}
                onChange={(ev)=>setPassword(ev.target.value)}
            />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
                Email
            </span>
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                name='Email'
                value={dthEmail}
                onChange={(ev)=>setDthEmail(ev.target.value)}
            />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
                Phone
            </span>
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                name='Phone'
                value={dthPhone}
                onChange={(ev)=>setDthPhone(ev.target.value)}
            />
        </div>
        <button className='btn btn-success'>Ghi lại</button>
    </div>
  )
}
