import React,{createContext, useState} from 'react';
export const userContext = createContext();
export function UserContext(props){
    const [user, setUser] = useState({
        login: false,
    });
    return(
        <userContext.Provider value= {[user,setUser]}>
            {props.children}
        </userContext.Provider>
    )
}
export default UserContext;
