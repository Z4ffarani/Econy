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

    // Nome da sessão da pagina no nav
    const [sectionName, setSectionName] = useState("")

    const handleSectionName = (event) => {
        setSectionName(event.target.textContent)
    }

    return ( 
        <>
            <header className="flex h-[50px] w-[100%] bg-[#00C174] justify-center items-center | sm:flex sm:justify-between sm:h-[60px] | lg:justify-center">
                
                <div className="flex w-[100%] max-w-[1024px] justify-center items-center relative | sm:flex sm:justify-between sm:px-[20px]">
                    {/* HAMBURGUER BTN PARA DISPOSITIVOS MOVEIS */}
                    <button className="w-[30px] h-[30px] m-2 bg-transparent absolute left-0 | sm:hidden" onClick={handleMenu}>
                        <img src="../../images/hamburger-menu-svgrepo-com.svg" alt="Button Menu" />
                    </button>

                    {/* LOGO */}
                    <img className="w-[130px] | sm:w-[150px]" src="../../images/econyLogo.png" alt="ECONY"/>
                                    
                    {/* PONTUAÇÃO RESPONSIVA 640px+ */}
                        <div className="hidden | sm:flex gap-2 mx-[70px]">
                            <div className="headerPoints w-[100px] h-5">
                                <p id="nomeEmpresa"></p>
                            </div>
                            <div className="headerPoints w-[100px] h-5">
                                <p id="creditoCarbono"></p>
                            </div>
                        </div>

                    {/* PERFIL */}
                    <div className="flex items-center justify-between w-[50px] h-[35px] absolute right-0 m-2  | sm:mr-[20px]">
                        <hr className="h-[35px] border border-[#c9c9c9]"/>
                        
                        <div className="w-[40px] h-[40px] relative">
                            <button className="rounded-[90px]" onClick={handlePoints}>
                                <img src="../../images/profile.svg" alt="PERFIL" />
                            </button>
                            <img className="w-[15px] absolute left-0 bottom-0" src="../../images/paises/UE.png" alt="UE"/>
                        </div>
                    </div>

                    {/* CONTEUDO BOTÃO PERFIL */}
                    <div className={`${showPoints ? 'flex flex-col translate-y-[70px] opacity-1 z-10' : 'flex flex-col  opacity-0 pointer-events-none translate-y-[40px] z-0'} flex flex-col justify-center items-center w-[100px] h-[100px] rounded-[5px] gap-3 m-2 absolute right-0 bg-[#1e1e1e] transition-all ease-in-out duration-500`}>
                        <div className="headerPoints | sm:hidden">
                            <p id="nomeEmpresa"></p>
                        </div>
                        <div className="headerPoints | sm:hidden">
                            <p id="creditoCarbono"></p>
                        </div>
                    </div>

                    {/* CONTEUDO MENU DE NAVEGAÇÃO */}
                    <div className={`${showButton ? 'flex flex-col translate-y-[120px] opacity-1 z-10' : 'flex flex-col  opacity-0 pointer-events-none translate-y-[90px] z-0'} w-[200px] rounded-[5px] m-2 absolute left-0  bg-[#1e1e1e] text-[#FFFFFF] transition-all ease-in-out duration-500 | sm:hidden`}>
                        <NavLink to="/" onClick={handleSectionName} className={`hover:bg-custom-gradient p-2 rounded-[5px]`}>DASHBOARD</NavLink>
                        <NavLink to="/Mercado" onClick={handleSectionName} className={`hover:bg-custom-gradient p-2 rounded-[5px]`}>MERCADO</NavLink>
                        <NavLink to="/Empresas" onClick={handleSectionName} className={`hover:bg-custom-gradient p-2 rounded-[5px]`}>EMPRESAS</NavLink>
                        <NavLink to="/Contratos" onClick={handleSectionName} className={`hover:bg-custom-gradient p-2 rounded-[5px]`}>CONTRATOS</NavLink>
                        <NavLink to="/Certificação" onClick={handleSectionName} className={`hover:bg-custom-gradient p-2 rounded-[5px]`}>CERTIFICAÇÃO</NavLink>
                    </div>
                </div>
            </header>
            {/* CONTEUDO MENU DE NAVEGAÇÃO W-640px+ */}
            <div className="hidden  | sm:flex sm:flex-col sm:mb-[30px]">
                <nav className="flex justify-center items-center h-[25px] gap-5 bg-[#1E1E1E] text-white">
                    <NavLink to="/" onClick={handleSectionName} className={({isActive}) => isActive ? 'text-[#00C174]' : 'text-white'}>DASHBOARD</NavLink>
                    <NavLink to="/Mercado" onClick={handleSectionName} className={({isActive}) => isActive ? 'text-[#00C174]' : 'text-white'}>MERCADO</NavLink>
                    <NavLink to="/Empresas" onClick={handleSectionName} className={({isActive}) => isActive ? 'text-[#00C174]' : 'text-white'}>EMPRESAS</NavLink>
                    <NavLink to="/Contratos" onClick={handleSectionName} className={({isActive}) => isActive ? 'text-[#00C174]' : 'text-white'}>CONTRATOS</NavLink>
                    <NavLink to="/Certificação" onClick={handleSectionName} className={({isActive}) => isActive ? 'text-[#00C174]' : 'text-white'}>CERTIFICAÇÃO</NavLink>
                </nav>
            </div>
        </>
     );
}
