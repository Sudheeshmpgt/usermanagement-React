import {createContext,useState} from 'react'

export const UserContext=createContext({})

function User({children}){
    const [userDetails,setLoginUserDetails]=useState()
    return(
    <UserContext.Provider value={{userDetails,setLoginUserDetails}}>
        {children}
    </UserContext.Provider>
    )
}

export default User 