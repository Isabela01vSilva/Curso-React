
import Navegador from '../components/Navegador'


export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh',
            color: '#fff',
        }}>
            <Navegador destino="/estiloso" texto="Estilos"/>
            <Navegador destino="/exemplo" texto="Exemplo" color="crimson"/>
            <Navegador destino="/jsx" texto="Jsx" color="#9400d3"/>
            <Navegador destino="/navegacao" texto="Navegação #01" color="green"/>
            <Navegador destino="/cliente/123" texto="Navegação #02" color="blue"/>
        </div>
    )
}