import React from 'react'
import Menu from '../components/Menu'
import Header from '../components/Header'
import Jumbotron from "../components/Jumbotron";

export default class MenuBottom extends React.Component
{
    render()
    {
        return (
            <div  id='theTop' className='theTop'>
                <Header/>
                <Jumbotron/>
                <Menu/>
            </div>
        )
    }
}