import React from 'react'
import MenuTop from './MenuTop'
import Footer from '../components/Footer'
import MainContent from './MainContent'

export default class Page extends React.Component
{
    render()
    {
        return (
            <div>
                <MenuTop />
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}
