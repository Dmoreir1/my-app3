import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import './RedStripe.scss'
import { useRecoilState } from 'recoil'
import { userNameAtom } from './Atoms'

export const RedStripe = () => {
    let [userName, setUserName] = useRecoilState(userNameAtom)
    let [email, setEmail] = useState("")

    const url = `https://jsonplaceholder.typicode.com/users/10`
    const usersQuery = useQuery(`users/1`, async () => await axios.get(url), 
    { refetchOnWindowFocus: false, enabled: false })

useEffect(() => { 
    if (usersQuery.isFetched && userName === "" ) {
        setUserName(usersQuery.data.data.name)
        setEmail(usersQuery.data.data.email)
    }
},  [userName,
    setEmail,
    setUserName,
    usersQuery.isFetched,
    usersQuery.data?.data.name,
    usersQuery.data?.data.email])
    

 

    const onHandlePush = () => {
        usersQuery.refetch()
    }

    return (
        <div className = 'RedStripe'>
            <button onClick = {() => onHandlePush()}>Get User</button>
            Username: {userName} {email}
        </div>
    )
}