import Layout from "../components/Layout"

export default function Jsx() {
    const a = 4
    const b = 3
    console.log(a * b)

    const titulo = <h1>JSX é um conceito Central</h1>

    function subtitulo() {
        return <h2>{"Acessando o JS dentro do JSX".toUpperCase()}</h2>
    }

    return (
        <Layout titulo="Entendendo o JSX">
            {titulo}
            {subtitulo()}
            {a * b}
            <p>{JSON.stringify({ nome: 'Isabela', idade: 20 })}</p>
        </Layout >
    )
}