import React from 'react';
import Logo from '../../assets/img/LogoMain.png'
import './Menu.css'
import Button from '../Button';

function Menu(){
    return(
        <nav className="Menu">
            <a>
                <img className="Logo" src={Logo} alt="AluraFlix"/>
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;