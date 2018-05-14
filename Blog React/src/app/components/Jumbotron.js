import React from 'react'

export default class Jumbotron extends React.Component
{
    render()
    {
        return (
            <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                <div className="col-md-6 px-0">
                    <h2 className="display-6">Переключатель позиции меню</h2>
                    <p className="lead my-3">По клику в данной области <strong>Меню</strong> и <strong>Header</strong> поменяются местами.</p>
                    <p className="lead my-3">Это пример изменения дочернего или соседнего по иерархии элемента в ответ на изменения в родительском.</p>
                </div>
            </div>
        )
    }
}