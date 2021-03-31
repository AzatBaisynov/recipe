import React from 'react'

const Recipe1 = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <ul>
                {
                    props.ingredients.map(ing => (
                        <li>ing.name</li>
                    ))
                }
            </ul>
            <h3>Инструкция по приготовлению</h3>
            <ul>
                {
                    props.steps.map(el => (
                        <li>el</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Recipe1