import React from "react";

export default props => {

    const gerarNerd = () => Math.random() > 0.5
    const gerarIdade = () => parseInt(Math.random() * (20)) + 50
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={
                function (e){
                    props.quandoClicar('João', gerarIdade(), gerarNerd)
                }
            }>
                Forncer informações
            </button>
        </div>
    )
}