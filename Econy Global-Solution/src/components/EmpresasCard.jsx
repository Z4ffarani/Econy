import { useEffect, useState } from "react"

export default function EmpresaCard({empresaImg, empresaNome, selos, empresaPais, empresaDescricao, empresaCreditos, id}){
    const [contratar, setContratar] = useState("CONTRATAR")

    const handleContratar = () => {
        setContratar("CONTRATADA")

        // array de IDS
        const IDS = JSON.parse(localStorage.getItem('IDS')) || {};
        JSON.stringify(localStorage.setItem('id', id))

        const identificador = JSON.parse(localStorage.getItem('id'))

        const dataEmissão = new Date().toLocaleString('pt-BR')
        IDS[identificador] = dataEmissão

        localStorage.setItem('IDS', JSON.stringify(IDS));

        console.log(IDS)
       
    }

    useEffect(() => {
        const IDS = JSON.parse(localStorage.getItem('IDS'))
        if(IDS !== undefined && IDS !== null){
            if (id in IDS){
                setContratar("CONTRATADA")
            }
        }
    }, [])

    return (
        <>
        {/* DIV PRINCIPAL */}
        <div className="flex flex-col gap-2">
            
            {/* CONTAINER COM NOME DA EMPRESA E BOTÃO PARA CONTRATAR */}
            <div className="flex justify-between items-center">
                <h1 className="empresaNome">{empresaNome}</h1>
                <hr className="h-[20px] border border-[#c9c9c9]"/>
                <button onClick={handleContratar} className={`contratarBtn ${contratar === "CONTRATAR" ? 'bg-transparent border-[2px] border-[#00C174] text-[#00C174]' : 'bg-[#1e1e1e] border-[#1e1e1e] border-[2px] text-white pointer-events-none'} hover:bg-[#00C174] hover:text-white  transition ease-in-out duration-500`}>{contratar}</button>
            </div>

            {/* CARD DA EMPRESA */}
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


            {/* CONTAINER DE DESCRIÇÃO DE EMPRESA */}
            <div className="empresaDescricao">
                <p >
                    {empresaDescricao}
                </p>
            </div>
            
        </div>  
        </>
        
    )
    
}