import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
    const [showButton, setShowButton] = useState(false)
    
    const handleMenu = () => {
        setShowButton(prevState => !prevState)
    }

    return ( 
        <>
            <div className="flex h-[50px] w-[100%] bg-[#00C174] justify-center items-center">
                <button className="bg-slate-100 w-[30px] h-[30px] absolute left-0 m-2" onClick={handleMenu}>
                    oi
                </button>
                <img className="w-[130px]" src="../../images/econyLogo.png" alt="ECONY"/>
                <div className={`${showButton ? 'flex flex-col translate-y-[125px] opacity-1' : 'flex flex-col  opacity-0 pointer-events-none translate-y-[90px]'} w-[200px] rounded-[5px] m-2 absolute left-0  bg-[#1e1e1e] text-[#FFFFFF] transition-all ease-in-out duration-500`}>
                    <NavLink to="/" className={`hover:bg-custom-gradient p-2 rounded-[5px]`}>DASHBOARD</NavLink>
                    <NavLink to="/Mercado" className={`hover:bg-custom-gradient p-2 rounded-[5px]`}>MERCADO</NavLink>
                    <NavLink to="/Empresas" className={`hover:bg-custom-gradient p-2 rounded-[5px]`}>EMPRESAS</NavLink>
                    <NavLink to="/Contratos" className={`hover:bg-custom-gradient p-2 rounded-[5px]`}>CONTRATOS</NavLink>
                    <NavLink to="/Certificação" className={`hover:bg-custom-gradient p-2 rounded-[5px]`}>CERTIFICAÇÃO</NavLink>
                </div>
            </div>
        </>
     );
}
