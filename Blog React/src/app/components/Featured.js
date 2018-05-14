import React from 'react'
import javascript from "../../images/javascript.jpg";
import react from "../../images/react.jpg";
export default class Featured extends React.Component
{
    render()
    {
        return (
            <div className="row mb-2">
                <div className="col-md-6">
                    <div className="card flex-md-row box-shadow h-md-250">
                        <div className="card-body d-flex flex-column align-items-start">
                            <strong className="d-inline-block mb-2 text-primary">Frontend</strong>
                            <h3 className="mb-0">
                                <a className="text-dark" href="#">Взаимодействие компонентов.</a>
                            </h3>
                            <div className="mb-1 text-muted">30 марта 2018 г.</div>
                            <p className="card-text mb-auto">Рассматриваем взаимодействие элементов React.</p>
                            <a href="http://getbootstrap.com/docs/4.0/examples/blog/#">Продолжить</a>
                        </div>
                        <img className="card-img-right flex-auto d-none d-md-block" src={'/'+react} style={{width: 200, height: 247}} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card flex-md-row box-shadow h-md-250">
                        <div className="card-body d-flex flex-column align-items-start">
                            <strong className="d-inline-block mb-2 text-success">Basics</strong>
                            <h3 className="mb-0">
                                <a className="text-dark" href="http://getbootstrap.com/docs/4.0/examples/blog/#">ES6 - современный JavaScript</a>
                            </h3>
                            <div className="mb-1 text-muted">25 марта 2018 г.</div>
                            <p className="card-text mb-auto">Рассмотрим основные отличия нового стандарта от ES5.</p>
                            <a href="http://getbootstrap.com/docs/4.0/examples/blog/#">Продолжить</a>
                        </div>
                        <img className="card-img-right flex-auto d-none d-md-block" src={'/'+javascript} style={{width: 200, height: 247}} />
                    </div>
                </div>
            </div>
        )
    }
}



