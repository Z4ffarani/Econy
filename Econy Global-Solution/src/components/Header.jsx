import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
    // Botão hamburguer, ativar e desativar menu
    const [showButton, setShowButton] = useState(false)
    
    const handleMenu = () => {
        setShowButton(prevState => !prevState)
    }

    // Botão perfil, ver e ocultar pontuação
    const [showPoints, setShowPoints] = useState(false)
    
    const handlePoints = () => {
        setShowPoints(prev => !prev)
    }

    return ( 
        <>
            <header className="flex h-[50px] w-[100%] bg-[#00C174] justify-center items-center">
                {/* HAMBURGUER BTN */}
                <button className="bg-transparent w-[30px] h-[30px] m-2 absolute left-0" onClick={handleMenu}>
                    <img src="../../images/hamburger-menu-svgrepo-com.svg" alt="Button Menu" />
                </button>

                {/* LOGO */}
                <img className="w-[130px]" src="../../images/econyLogo.png" alt="ECONY"/>
                
                {/* PERFIL */}
                <button className="w-[35px] h-[35px] bg-[#1e1e1e] rounded-[90px] m-2 absolute right-0" onClick={handlePoints}>
                    /
                </button>
                <div className={`${showPoints ? 'flex flex-col translate-y-[70px] opacity-1 z-10' : 'flex flex-col  opacity-0 pointer-events-none translate-y-[40px] z-0'} flex flex-col justify-center items-center w-[100px] h-[100px] rounded-[5px] gap-3 m-2 absolute right-0 bg-[#1e1e1e] transition-all ease-in-out duration-500`}>
                    <div className="headerPoints">
                        <p id="nomeEmpresa"></p>
                    </div>
                    <div className="headerPoints">
                        <p id="creditoCarbono"></p>
                    </div>
                </div>
                <div className={`${showButton ? 'flex flex-col translate-y-[120px] opacity-1 z-10' : 'flex flex-col  opacity-0 pointer-events-none translate-y-[90px] z-0'} w-[200px] rounded-[5px] m-2 absolute left-0  bg-[#1e1e1e] text-[#FFFFFF] transition-all ease-in-out duration-500`}>
                    <NavLink to="/" className={`hover:bg-custom-gradient p-2 rounded-[5px]`}>DASHBOARD</NavLink>
                    <NavLink to="/Mercado" className={`hover:bg-custom-gradient p-2 rounded-[5px]`}>MERCADO</NavLink>
                    <NavLink to="/Empresas" className={`hover:bg-custom-gradient p-2 rounded-[5px]`}>EMPRESAS</NavLink>
                    <NavLink to="/Contratos" className={`hover:bg-custom-gradient p-2 rounded-[5px]`}>CONTRATOS</NavLink>
                    <NavLink to="/Certificação" className={`hover:bg-custom-gradient p-2 rounded-[5px]`}>CERTIFICAÇÃO</NavLink>
                </div>
            </header>
        </>
     );
}
