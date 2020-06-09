import React,{createContext,useEffect} from 'react'
import {api} from './api'

export  const  GlobalState = createContext()


export function Provider(props){
    const [users,setUsers] = React.useState([])

    useEffect(()=>{
        fetch(api)
            .then(data=> data.json() )
            .then(json=>{ setUsers(json.results) })
            .catch(err=> console.log(err) )
    },[]

    )

    return(
        <GlobalState.Provider value={{users,setUsers}}>
            {props.children}    
        </GlobalState.Provider>
    )
}