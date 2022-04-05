import React from 'react'

export default props  =>{

    const {min, max} = props
    
    const aleatorio = parseInt(Math.random() * (props.max - props.min)) + props.min

    return (
    <div>
        <h2>Valor aleatório</h2>
        <p><strong>Valor mínimo: </strong> {props.min}</p>
        <p><strong>Valor máximo: </strong> {props.max}</p>
        <p><strong>Valor escolhido: </strong> {props.max}</p>
    </div>
    )
}