import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faArrowCircleLeft,faArrowCircleRight} from '@fortawesome/fontawesome-free-solid';

export default class Sidebar extends React.Component
{
    render()
    {
        const FA = FontAwesomeIcon;
        const arrow = this.props.flag ? <FA icon={faArrowCircleLeft} /> : <FA icon={faArrowCircleRight} />;
        return (
            <aside className="col-md-4 blog-sidebar">
                <div className="p-3 mb-3 bg-light rounded text-center" onClick={this.props.toggleFlag.bind(this)}>
                    <h4>Переключить Layout</h4>
                    <div className='arrow'>{arrow}</div>
                </div>

                <div className="p-3">
                    <h4 className="font-italic">Последние комментарии</h4>
                    <p>To be done</p>
                </div>

            </aside>
        )
    }
}