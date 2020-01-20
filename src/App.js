import React, { useState } from 'react'; 

// Componente: Função que retorna algum conteudo HTML / bloco isolado de Html Css e Js
// Estado: informação mantida pelo componente 
// propriedade: informações que o componente PAI passa para o componente FILHO
import Header from './Header';

function App(){

    const [counter, setCounter ] = useState(0);  

    function IncrementarCount(){
        setCounter(counter + 1);
    }
    return(
        <>
        <Header title="t 1"/>
        <Header title="t 2"/>
        <Header title="t 3"/>
        <h1> Contador: {counter}</h1>
        <button onClick={IncrementarCount}>Incrementar</button>
        </>
    );
    //fragmentar 
}
export default App;