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
        <div className="flex flex-col items-center">  
            <div className="flex w-[100%] h-[35px] bg-[#005030] justify-center items-center mb-5 | sm:hidden">
                <h1 className="text-[#00C174]">MERCADO</h1>
            </div>
            
            {/* DATA */}
            <div className="flex w-[95%] max-w-[640px] text-[#00C174] text-[13px] font-normal justify-center sm:justify-between | sm:text-[18px]">
                <h1 className="hidden sm:block">CRÉDITOS DE CARBONO</h1>
                <h1>UTF-8 <span className="text-[#d9d9d9]">|</span> {data}</h1>
            </div>
            <hr className="w-[95%] max-w-[640px] mb-2"/>

            {/* CARD DE GRÁFICOS */}
            <MarketCard mercado='UE ETS' preco='€67.60' ytd={-16.18} cambio={0.00} pais='UE'/>
            <MarketCard mercado='CA ETS' preco='$49.00' ytd={-25.76} cambio={-41.51} pais='CA'/>
            <MarketCard mercado='CN ETS' preco='$14.57' ytd={+32.69} cambio={-0.05} pais='CN'/>
            <MarketCard mercado='BR ETS' preco='R$25.00' ytd={+50.18} cambio={0.00} pais='BR'/>
        </div>
        </>
    )
}