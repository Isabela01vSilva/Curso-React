import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";

export default function Exemplo() {
    return (
        <Layout titulo="Exemplo de usando componentes">
            <Cabecalho titulo="Next.js e React" />
            <Cabecalho titulo="Aprende NExt na prática" />
        </Layout>
    )
}