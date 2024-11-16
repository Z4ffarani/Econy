import { useState } from "react"

export default function EmpresaCard({empresaImg, empresaNome, selos, empresaPais, empresaDescricao, empresaCreditos}){
    
    const [contratar, setContratar] = useState("CONTRATAR")

    const handleContratar = () => {
        setContratar("CONTRATADA")
        setTimeout(()=>{
            alert(`${empresaNome} contratada`)
        }, 600)
    }

    return (
        <>
        <div className="flex flex-col gap-2">
            <div className="flex justify-between">
                <h1 className="empresaNome">{empresaNome}</h1>
                <span>|</span>
                <button onClick={handleContratar} className={`contratarBtn ${contratar === "CONTRATAR" ? 'bg-transparent border-[2px] border-[#00C174] text-[#00C174]' : 'bg-[#1e1e1e] border-[#1e1e1e] border-[2px] text-white pointer-events-none'} hover:bg-[#00C174] hover:text-white  transition ease-in-out duration-500`}>{contratar}</button>
            </div>
            <div>
                <div className="relative">
                    <img className="empresaImg" src={`../../images/empresas/${empresaImg}.png`} alt={`${empresaNome}`} />
                    <div className="empresaIcons">
                        <img className="empresaPais" src={`../../images/paises/${empresaPais}.png`} alt={`${empresaPais}`}/>
                        {
                            selos.map(selos => (
                                <img className="seloIcon" src={`../../images/selos/${selos}.png`} alt={`${selos}`}/>
                            )
                            )
                        }
                    </div>
                    <div className="empresaCreditos">
                        <p>{empresaCreditos}</p>
                        <img className="h-[35px] absolute p-1 right-0" src="../../images/iconCO2.png" alt="CO2" />
                    </div>
                </div>

            </div>
            <div className="empresaDescricao">
                <p >
                    {empresaDescricao}
                </p>
            </div>
        </div>  
        </>
        
    )
    
}