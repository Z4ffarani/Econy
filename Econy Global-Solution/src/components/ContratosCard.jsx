import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function ContratoCard({id, empresaImg, selos, contratoValor, empresaNome}){
    
    // buscando dicionario de IDS e Emissões
    const IDS = JSON.parse(localStorage.getItem('IDS'))

    // estabelecendo rota dinamica
   let {contrato} = useParams()

    return(
        <>
        <div className="divContrato | sm:flex sm:flex-row">

            {/* LADO SUPERIOR/ESQUERDO */}
            <div className="contratoSupEsq | sm:w-[60%]">
                <div className="relative">
                    <img className="rounded-t-[15px]" src={`../../images/empresas/${empresaImg}.png`} alt={empresaNome} />
                    <div className="grid grid-cols-[30px] gap-1 ml-2 absolute top-[30%] | sm:grid-cols-[20px_20px] sm:top-[40%]">
                        {
                            selos.map(selos => (
                                <img className="seloIcon | sm:h-[20px]" src={`../../images/selos/${selos}.png`} alt={`${selos}`}/>
                            )
                            )
                        }
                    </div>
                </div>
                <div className="idContainer | sm:h-[20%]">
                    <p>{`ID: ${id}`}</p>
                </div>
            </div>

            {/* LADO INFERIOR/DIREITO */}
            <div className="contratoInfDir | sm:justify-center sm:h-[165px] sm:gap-2 ">
                <div className="sm:w-[100%]">
                    <div className="contratoCompra | sm:p-[8px] sm:text-[20px]">
                        <p>COMPRA</p>
                        <img className="w-[25px]" src="../../images/iconCO2.png" alt="CO2"/>
                        <p>{contratoValor}</p>
                    </div>
                    <div className="buttonContratoContainer">
                        <button className="buttonContrato bg-white text-[#00C174] | sm:p-[10px] sm:text-[16px]">Contrato pendente...</button>
                        <Link to={id}>
                            <button className="buttonContrato bg-[#00C174] text-white hover:bg-white hover:text-[#00C174] transition ease-in-out duration-300">GERENCIAR CONTRATO</button>
                        </Link>
                    </div>
                </div>
                <p className="w-[100%] py-[2px] text-center text-white font-medium | sm:text-[20px]">DATA DE EMISSÃO: {IDS[id]}</p>
            </div>
                <hr className="w-[100%] border-[1px] | sm:hidden" />
        </div>
        </>
    )
}