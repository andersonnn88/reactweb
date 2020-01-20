import React from 'react';
import './global.css';
import './app.css';
import './sidebar.css';



function App(){
    return (
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                    <form>
                        <div class="input-block">
                            <label htmlFor="github_username">Usuário do Github</label>
                            <input name="github_username" id="username_github" required />
                        </div>

                        <div class="input-block">
                            <label htmlFor="techs">Usuário do Github</label>
                            <input name="techs" id="techs" required />
                        </div>

                        <div className="input-group">
                            <div class="input-block">
                                <label htmlFor="latitude">Latitude</label>
                                <input name="latitude" id="latitude" required />
                            </div>
                            <div class="input-block">
                                <label htmlFor="longitude">longitude</label>
                                <input name="longitude" id="longitude" required />
                            </div>
                        </div>
                        <button type="submit">Salvar</button>
                    </form>
            </aside>
            <main></main>
        </div>
    );
}

export default App;
