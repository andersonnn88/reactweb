import React, { useState, useEffect } from 'react';
import api from './services/api';
import './global.css';
import './app.css';
import './main.css';
import './sidebar.css';

import Devform from './componentes/Devform';
import Devitem from './componentes/Devitem';



function App(){
    const [devs, setdevs] =useState([]);


    

    useEffect(()=>{
        async function loadDevs(){
            const response =await api.get('/devs');

            setdevs(response.data);
        }
            loadDevs();
    }, []);

    async function handleAddDev(data){
        const response = await api.post('/devs',data);
        
       

        setdevs([...devs, response.data]);// adição dentro de um array no javascript
        
    }
    return (
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                  <Devform onSubmit={handleAddDev} />  
            </aside>
            <main>
                <ul>
                    {devs.map(dev =>(
                        <Devitem  key={dev._id}  dev={dev}/>
                    ))}
        
                </ul>
            </main>
        </div>
    );
}

export default App;
