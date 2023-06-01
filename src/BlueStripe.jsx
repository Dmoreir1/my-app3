import React from 'react'
import './BlueStripe.scss'
import { userNameAtom } from './Atoms'
import { useRecoilValue } from 'recoil'


export const BlueStripe = () => {
    const userName = useRecoilValue(userNameAtom)
    return (
<div className ='BlueStripe'>
    Username: {userName}
</div>)
}

