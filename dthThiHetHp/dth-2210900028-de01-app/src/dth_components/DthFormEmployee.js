import axios from '../dth_apis/dth_2210900028'
import React, { useEffect, useState } from 'react'

export default function DthFormEmployee({rederDthEmployee,  onAddNew}) {
    const [dthId,setDthId] =useState(rederDthEmployee.dthId)
    const [dthFullName,setDthFullName] = useState(rederDthEmployee.dthFullName)
    const [dthDate,setDthDate] = useState(rederDthEmployee.dthDate)
    const [dthEmail,setDthEmail] = useState(rederDthEmployee.dthEmail)
    const [dthPhone,setDthPhone] = useState(rederDthEmployee.dthPhone)
    const [dthStatus,setDthStatus] = useState(rederDthEmployee.dthStatus)

    useEffect(()=>{
        setDthId(rederDthEmployee.dthId)
        setDthFullName(rederDthEmployee.dthFullName)
        setDthDate(rederDthEmployee.dthDate)
        setDthEmail(rederDthEmployee.dthEmail)
        setDthPhone(rederDthEmployee.dthPhone)
        setDthStatus(rederDthEmployee.dthStatus)

    },[rederDthEmployee])
    
    const dthHanldeSubmit = async (dthEvent)=>{
        dthEvent.preventDefault();
        const dthObjdthEmployee={
            "dthId": dthId,
            "dthFullName": dthFullName,
            "dthDate": dthDate,
            "dthEmail": dthEmail,
            "dthPhone": dthPhone,
            "dthStatus": dthStatus
        }
          //Thêm dữ liệu vào api
        await axios.post("dthEmployee/"+dthObjdthEmployee.dthId,dthObjdthEmployee);
       onAddNew();
    }
   
  return (
    <div>
      <h2>Form xử lý dữ liệu thêm mới</h2>
      <form>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">dthFullName</span>
            <input type="text" className="form-control" 
                    aria-label="dthFullName" 
                    aria-describedby="dthFullName"
                    name='dthFullName' value={dthFullName}
                    onChange={(dthEv)=>setDthFullName(dthEv.target.value)}/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">dthDate</span>
            <input type="text" className="form-control" 
                    aria-label="dthDate" 
                    aria-describedby="dthDate" 
                    name='dthTbName' value={dthDate}
                    onChange={(dthEv)=>setDthDate(dthEv.target.value)}/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">dthEmail</span>
            <input type="text" className="form-control" 
                    aria-label="dthEmail" 
                    aria-describedby="dthEmail"
                    name='dthEmail' value={dthEmail}
                    onChange={(dthEv)=>setDthEmail(dthEv.target.value)}/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">dthPhone</span>
            <input type="text" className="form-control" 
                    aria-label="dthPhone" 
                    aria-describedby="dthPhone" value={dthPhone}
                    name='dthPhone' 
                    onChange={(dthEv)=>setDthPhone(dthEv.target.value)}
                    />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">dthStatus</span>
            <select className="form-control" name='dthStatus' id='dthStatus' 
                    value={dthStatus} onChange={(dthEv)=>setDthStatus(dthEv.target.value)}>
                <option value={true}>Active</option>
                <option value={false}>Non-Active</option>
            </select>
        </div>
        <button className='btn btn-primary  m-2' name='btnDthSave'
                 onClick={dthHanldeSubmit}
            >Save</button>
      </form>
    </div>
  )
}
