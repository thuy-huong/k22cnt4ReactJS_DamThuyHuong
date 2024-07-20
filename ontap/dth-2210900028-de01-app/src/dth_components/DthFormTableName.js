import axios from '../dth_apis/dth_2210900028'
import React, { useEffect, useState } from 'react'

export default function DthFormTableName({rederDthTableName,onDthEdit}) {

    const [dthId,setDthId] = useState(rederDthTableName.dthId)
    const [dthTbName,setDthTbName] = useState(rederDthTableName.dthTbName)
    const [dthTbEmail,setDthTbEmail] = useState(rederDthTableName.dthTbEmail)
    const [dthTbPhone,setDthTbPhone] = useState(rederDthTableName.dthTbPhone)
    const [dthStatus,setDthStatus] = useState(rederDthTableName.dthStatus)

    useEffect(()=>{
        setDthId(rederDthTableName.dthId)
        setDthTbName(rederDthTableName.dthTbName)
        setDthTbEmail(rederDthTableName.dthTbEmail)
        setDthTbPhone(rederDthTableName.dthTbPhone)
        setDthStatus(rederDthTableName.dthStatus)

    },[rederDthTableName])
    
    const dthHanldeSubmit = async (dthEvent)=>{
        dthEvent.preventDefault();
        const dthObjTableName={
            "dthId": dthId,
            "dthTbName": dthTbName,
            "dthTbEmail": dthTbEmail,
            "dthTbPhone": dthTbPhone,
            "dthStatus": dthStatus
        }
          //Thêm dữ liệu vào api
        await axios.put("dthTableName/"+dthObjTableName.dthId,dthObjTableName);
        onDthEdit();
    }
  return (
    <div>
      <h2>Form xử lý dữ liệu thêm mới</h2>
      <form>
        {/* <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">dthId</span>
            <input type="text" className="form-control" 
                    aria-label="dthId" 
                    aria-describedby="dthId"
                    name='dthId' value={dthId}
                    onChange={(dthEv)=>setDthId(dthEv.target.value)}/>
        </div> */}
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">dthTbName</span>
            <input type="text" className="form-control" 
                    aria-label="dthTbName" 
                    aria-describedby="dthTbName"
                    name='dthTbName' value={dthTbName}
                    onChange={(dthEv)=>setDthTbName(dthEv.target.value)}/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">dthTbEmail</span>
            <input type="text" className="form-control" 
                    aria-label="dthTbEmail" 
                    aria-describedby="dthTbEmail"
                    name='dthTbEmail' value={dthTbEmail}
                    onChange={(dthEv)=>setDthTbEmail(dthEv.target.value)}/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">dthTbPhone</span>
            <input type="text" className="form-control" 
                    aria-label="dthTbPhone" 
                    aria-describedby="dthTbPhone"
                    name='dthTbPhone' value={dthTbPhone}
                    onChange={(dthEv)=>setDthTbPhone(dthEv.target.value)}/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">dthStatus</span>
            <select className="form-control" name='dthStatus' id='dthStatus' value={dthStatus}
                     onChange={(dthEv)=>setDthStatus(dthEv.target.value)}>
                <option value={true}>Active</option>
                <option value={false}>Non-Active</option>
            </select>
        </div>
        <button className='btn btn-primary my-3' name='btnDthSave'
                onClick={dthHanldeSubmit}
            >Save</button>
      </form>
    </div>
  )
}
