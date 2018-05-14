import React from 'react'
import Menu from '../components/Menu'
import Header from '../components/Header'
import Jumbotron from "../components/Jumbotron";
import Featured from "../components/Featured";

export default class MenuTop extends React.Component
{
    state = {
        flag: true
    };

    // контекст вызова стрелочной функции в отличие от традиционно объявленного метода,
    // всегда связан с объектом, в котором она определена, поэтому bind.this не нужен.
    toggler = () =>
    {
        this.setState({
            flag: !this.state.flag
        });
    };

    render()
    {
        const featured = this.state.flag ? <div className="card-body"><Featured/></div>  : '';
        const plus_minus = this.state.flag ? '+'  : <span>&ndash;</span>;
        return (
            <div id='theTop' className='theTop'>
                <Header/> <Menu/>
                <div className="card">
                    <div className="card-header"onClick={this.toggler}>
                        <div className="card-title align-content-end">{plus_minus}</div>
                    </div>
                        {featured}
                </div>
            </div>
        )
    }
}