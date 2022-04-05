import React from "react"

export default function ComParametro(props){

    const aluno= props.aluno
    const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
    const notaInt = Math.ceil(props.nota)
    return (
        <div>
            <h2>{ props.titulo }</h2>
            <p> <b>{aluno}</b> tem nota {notaInt} e foi {status} </p>
        </div>
    )
}