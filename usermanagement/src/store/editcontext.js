import { createContext, useState } from "react";

export const EditContext=createContext({})

function Edit({children}){
    const [editUser,setEditUser]=useState()
    //console.log(editUser)
    return(
        <EditContext.Provider value={{editUser,setEditUser}}>
            {children}
        </EditContext.Provider>
    )
}

export default Edit