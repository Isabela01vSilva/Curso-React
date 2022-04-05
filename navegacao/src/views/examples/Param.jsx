import React from "react";
import {useParams} from 'react-router-dom'

const Param = props =>{
    const { id } = useParams()
    return(
    <aside className="Param">
       <h1>Param</h1>
       <h2>Valor: {id} </h2>
    </aside>
)}
export default Param