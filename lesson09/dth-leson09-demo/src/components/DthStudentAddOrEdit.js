import axios from 'axios';
import React, { useState } from 'react'

export default function DthStudentAddOrEdit({dthOnSubmit}) {
    const[dthId, setDthId] = useState('');
    const[dthName, setDthName] = useState('');
    const[dthAge, setDthAge] = useState(0);
    const[dthPhone, setDthPhone] = useState(0);
    const[dthEmail, setDthEmail] = useState('');
    const[dthStatus, setDthStatus] = useState('true');
    
    const dthHandleSubmit = (dthEvent)=>{
        dthEvent.preventDefault();
        let dthStudent = {
            dthId:dthId,
            dthAgethName:dthName,
            dthAge:dthAge,
            dthPhone:dthPhone,
            dthEmail:dthEmail,
            dthStatus:dthStatus,
        }
        axios.post(`https://666a99ae7013419182cffd68.mockapi.io/api/dthv1/dthStudent`, {dthStudent})
        .then(() => {
          console.log("NewStudent: ",dthStudent);
        })
        window.location.reload();
    }
  return (
    <div className='col-md-6'>
        <form >
           
                <legend>Thêm mới sinh viên</legend>
                <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">
                        Mã sinh viên
                    </label>
                    <input
                        type="text"
                        id="disabledTextInput"
                        className="form-control"
                        name='dthId' value={dthId}
                        onChange={(ev)=>setDthId(ev.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">
                        Họ và tên
                    </label>
                    <input
                        type="text"
                        id="disabledTextInput"
                        className="form-control"
                        name='dthName' value={dthName}
                        onChange={(ev)=>setDthName(ev.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">
                        Tuổi
                    </label>
                    <input
                        type="number"
                        id="disabledTextInput"
                        className="form-control"
                        name='dthAge' value={dthAge}
                        onChange={(ev)=>setDthAge(ev.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">
                        Số điện thoại
                    </label>
                    <input
                        type="text"
                        id="disabledTextInput"
                        className="form-control"
                        name='dthPhone' value={dthPhone}
                        onChange={(ev)=>setDthPhone(ev.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">
                        Email
                    </label>
                    <input
                        type="text"
                        id="disabledTextInput"
                        className="form-control"
                        name='dthEmail' value={dthEmail}
                        onChange={(ev)=>setDthEmail(ev.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="disabledSelect" className="form-label">
                        Trạng thái
                    </label>
                    <select id="disabledSelect" 
                        className="form-select" 
                        name='dthStatus' value={dthStatus}
                        onChange={(ev)=>setDthStatus(ev.target.value)}>
                        <option value={true}>Hiển thị</option>
                        <option value={false}>Ẩn</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary" name='dthOnSubmit' onClick={dthHandleSubmit}>
                Submit
                </button>
           
        </form>
    </div>
  )
}
