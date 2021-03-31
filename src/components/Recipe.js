import React from 'react'

export const Recipe = (props) => {
    return (
        <div className="recipe">
            <h3 className="recipe__title">{props.name}</h3>
            <ul className="recipe__ingredients">
                {props.ingredients.map(el => (
                    <li className="recipe__item">{el.name}</li>
                ))}
            </ul>
            <h3 className="recipe__title">Инструкция по приготовлению</h3>
            <ul className="recipe__ingredients">
                {props.steps.map(el => (
                    <li className="recipe__item">{el}</li>
                ))}
            </ul>
        </div>
    )
}