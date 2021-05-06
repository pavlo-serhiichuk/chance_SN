import React, {useEffect, useState} from 'react'
// import s from './Profile.module.css'

 const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false)
     let [status, setStatus] = useState(props.status)

     useEffect(() => {
         setStatus(props.status)
     }, [props.status])

     const activateEditMode = () => {
         setEditMode(true)
     }
     const deactivateEditMode = () => {
         setEditMode(false)
         props.updateStatus(status)
     }

     const onStatusChange = (e) => {
         setStatus(e.currentTarget.value)
    }

    return (
        <>
            {!editMode &&
            <div>
                <span onClick={activateEditMode}>{status}</span>
            </div>}

            {editMode &&
            <div>
                <input onChange={onStatusChange}
                       autoFocus={true} onBlur={deactivateEditMode}
                       type="text" value={status}/>
            </div>}
        </>
    )
 }


export default ProfileStatus