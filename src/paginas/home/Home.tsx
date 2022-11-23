import React from "react";
import './Home.css'

let nome = 'Blog pessoal'

function Home(){
    return(
        <div className="conatiner center">
        <div>
            <div className="fonte1">{nome}</div>
        <form>
            <button className="fonte">Ìnicio</button>
            <button className="fonte">Contato</button>
            <button className="fonte">Ajuda</button>
        </form>
        </div>
        </div>

    );
}
export default Home;