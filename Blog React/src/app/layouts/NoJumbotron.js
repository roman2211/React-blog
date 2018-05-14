import React from 'react'
import Menu from '../components/Menu'
import Header from '../components/Header'

export default class NoJumbotron extends React.Component
{
    render()
    {
        return (
            <div id='theTop' className='theTop'>
                <Header/>
                <Menu/>
            </div>
        )
    }
}