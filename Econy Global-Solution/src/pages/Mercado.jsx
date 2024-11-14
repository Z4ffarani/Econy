import MarketCard from "../components/MarketCard"
import { useEffect, useState } from "react"

export default function Mercado(){
    
    // DATA E HORARIO EM QUE O USUÁRIO ESTÁ ACESSANDO A PAGINA
    const[data, setData] = useState("")

    useEffect(() =>{
        const dataAtual = new Date()
        const formato = dataAtual.toLocaleString('pt-BR')
        setData(formato)
        
    }, []);

    return (
        <>
        <div className="flex flex-col justify-center items-center">  
            <div className="flex w-[100%] h-[20px] bg-[#1E1E1E] justify-center items-center mb-5">
                <h1 className="text-[#00C174]">MERCADO</h1>
            </div>
            
            {/* DATA */}
            <div className="flex w-[95%] text-[#00C174] text-[13px] font-normal justify-between">
                <h1>CRÉDITOS DE CARBONO</h1>
                <h1>UFT-8 <span className="text-[#d9d9d9]">|</span> {data}</h1>
            </div>
            <hr className="w-[95%] mb-2"/>

            {/* CARD DE GRÁFICOS */}
            <MarketCard mercado='UE ETS' preco='€67.60' ytd={-16.18} cambio={0.00} pais='UE'/>
            <MarketCard mercado='CA ETS' preco='$67.60' ytd={-25.76} cambio={-41.51} pais='CA'/>
            <MarketCard mercado='CN ETS' preco='$67.60' ytd={+32.69} cambio={-0.05} pais='CN'/>
            <MarketCard mercado='BR ETS' preco='R$67.60' ytd={+50.18} cambio={0.00} pais='BR'/>
        </div>
        </>
    )
}