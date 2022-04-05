import React from "react"
import './App.css'

import Card from "./layout/Card"
import Primeiro from './basicos/Primeiro'
import ComParametro from './basicos/ComParametro'
import Fragmento from './basicos/Fragmento'
import Aleatorio from "./basicos/Aleatorio"
import Familia from "./basicos/Familia"
import FamiliaMembro from "./basicos/FamiliaMembro"
import ListaAlunos from "./repeticao/ListaAlunos"
import TabelaProdutos from "./repeticao/TabelaProdutos"
import ParOuImpar from "./condicional/ParOuImpar"
import Usuarioinfo from "./condicional/Usuarioinfo"

import DiretaPai from "./comunicacao/DiretaPai"
import IndiretaPai from "./comunicacao/IndiretaPai"

import Input from "./formulario/Input"
import Contador from "./contador/Contador"

import Mega from './mega/Mega'

export default _ =>
   <div className="App">
      <h1>Fundamentos do react </h1>

      <div className="Cards">

      <Card titulo="#13 - Mega - Desafio" color="#B9006E">
        <Mega qtde={8}></Mega>
      </Card>

         <Card titulo="#12 - Contador" color="#424242">
            <Contador numeroInicial={0} ></Contador>
         </Card>

         <Card titulo="#11 - Componente Controlado (input)" color="#E45F56">
            <Input></Input>
         </Card>

         <Card titulo="#10 - Comunicação indireta" color="#8BAD39">
            <IndiretaPai></IndiretaPai>
         </Card>

         <Card titulo="#09 - Comunicação direta" color="#59323C">
            <DiretaPai></DiretaPai>
         </Card>

         <Card titulo="#08 - Renderização condicional" color="#982395">
            <ParOuImpar numero={21}></ParOuImpar>
            <Usuarioinfo usuario={{ nome: 'Carlos' }} />
         </Card>

         <Card titulo="#07 - Desafio Repetição" color="#3A9AD9">
            <TabelaProdutos></TabelaProdutos>
         </Card>

         <Card titulo="#06 - Repetição" color="#FF4C65">
            <ListaAlunos></ListaAlunos>
         </Card>

         <Card titulo="#05 - Componente com filho" color="#00C8F8">
            <Familia sobrenome="Ferreira">
               <FamiliaMembro nome="Pedro" />
               <FamiliaMembro nome="Rafa" />
               <FamiliaMembro nome="Ana" />

               {/* isto é um comentario */}

            </Familia>
         </Card>

         <Card titulo="#04 - Desafio aleatório" color="#FA6900">
            <Aleatorio min={1} max={60} />
         </Card>

         <Card titulo="#03 - Fragmento" color="#E9AC6F">
            <Fragmento />
         </Card>

         <Card titulo="#02 - Com Paramentro" color="#E8B714">
            <ComParametro titulo="Situação do aluno" aluno="Isabela" nota={9.3} />
         </Card>

         <Card titulo="#01 - Primeiro Componente" color="#588C73">
            <Primeiro> </Primeiro>
         </Card>

      </div>
   </div>
