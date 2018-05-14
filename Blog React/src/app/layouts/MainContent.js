import React from 'react'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'

export default class MainContent extends React.Component
{
    state = {
        flag: true // По умолчанию сайдбар находится справа
    };

    toggleFlag = () => {
        this.setState({
            flag: !this.state.flag
        });
    };

    render()
    {
        let sidebar = <Sidebar flag={this.state.flag} toggleFlag={this.toggleFlag} />
        let content = this.state.flag
                                ? <div className="row">{this.props.children} { sidebar }</div>
                                : <div className="row"> { sidebar } {this.props.children}</div>;
        return (
            <main role="main" className="container">
                { content }
            </main>
        )
    }
}