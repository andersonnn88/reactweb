import React, { useState, useEffect } from 'react';
import './global.css';
import './app.css';
import './main.css';
import './sidebar.css';



function App(){
    const [github_username, setGithub_username] =useState('');
    const [techs, setTechs] =useState('');

    const [latitude, setLatitude] =useState('');
    const [longitude, setLongitude] =useState('');

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(
            (position) =>{
                const {latitude, longitude } = position.coords;

                setLatitude(latitude);
                setLongitude(longitude);
            },
            (err) =>{
                console.log(err);
            },
            {
                timeout: 30000,
            }
        )
    }, []);

    async function handleAddDev(e){
        e.preventDefault();
        
    }
    return (
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                    <form>
                        <div className="input-block">
                            <label htmlFor="github_username">Usuário do Github</label>
                            <input 
                            name="github_username" 
                            id="username_github" 
                            required 
                            value={github_username}
                            onChange={e =>{setGithub_username(e.target.value) }}
                            />
                        </div>

                        <div className="input-block">
                            <label htmlFor="techs">Usuário do Github</label>
                            <input
                             name="techs" 
                             id="techs" 
                             required 
                             value={techs}
                             onChange={e =>{setTechs(e.target.value) }}
                             />
                        </div>

                        <div className="input-group">
                            <div className="input-block">
                                <label htmlFor="latitude">Latitude</label>
                                <input  
                                type="number" 
                                name="latitude" 
                                id="latitude" 
                                required 
                                value={latitude}
                                onChange={e =>{setLatitude(e.target.value) }} 
                                />
                            </div>
                            <div className="input-block">
                                <label htmlFor="longitude">Longitude</label>
                                <input 
                                type="number" 
                                name="longitude" 
                                id="longitude" 
                                required value={longitude}
                                onChange={e =>{setLongitude(e.target.value) }} />
                            </div>
                        </div>
                        <button type="submit">Salvar</button>
                    </form>
            </aside>
            <main>
                <ul>
                    <li className="dev-item">
                        <header>
                        <img src="https://avatars0.githubusercontent.com/u/35690587?s=460&v=4"   alt="Anderson Araujo"/>
                            <div className="user-info">
                                <strong>Anderson Araujo</strong>
                                <span>ReackJS, Reack Native</span>
                            </div>
                        </header>

                        <p>Apainonado pelas melhores tecnologias</p>
                        <a href="https://github.com/andersonnn88">Acessar perfi no Github</a>
                    </li>
                    <li className="dev-item">
                        <header>
                        <img src="https://avatars0.githubusercontent.com/u/35690587?s=460&v=4"   alt="Anderson Araujo"/>
                            <div className="user-info">
                                <strong>Anderson Araujo</strong>
                                <span>ReackJS, Reack Native</span>
                            </div>
                        </header>

                        <p>Apainonado pelas melhores tecnologias</p>
                        <a href="https://github.com/andersonnn88">Acessar perfi no Github</a>
                    </li>
                    <li className="dev-item">
                        <header>
                        <img src="https://avatars0.githubusercontent.com/u/35690587?s=460&v=4"   alt="Anderson Araujo"/>
                            <div className="user-info">
                                <strong>Anderson Araujo</strong>
                                <span>ReackJS, Reack Native</span>
                            </div>
                        </header>

                        <p>Apainonado pelas melhores tecnologias</p>
                        <a href="https://github.com/andersonnn88">Acessar perfi no Github</a>
                    </li>
                 <li className="dev-item">
                        <header>
                            <img src="https://avatars0.githubusercontent.com/u/35690587?s=460&v=4"   alt="Anderson Araujo"/>
                            <div className="user-info">
                                <strong>Anderson Araujo</strong>
                                <span>ReackJS, Reack Native</span>
                            </div>
                        </header>

                        <p>Apainonado pelas melhores tecnologias</p>
                        <a href="https://github.com/andersonnn88">Acessar perfi no Github</a>
                    </li>
                    </ul>
            </main>
        </div>
    );
}

export default App;
