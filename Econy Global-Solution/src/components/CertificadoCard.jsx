import { useState } from "react";

export default function CertificadoCard({certificadoImg, nomeCertificado, descricaoCertificado, porGrupoImg}) {

    // BOTÃO DE OBTER CERTIFICADO
    const [obter, setObter] = useState('OBTER')

    const handleObter = () => {
        setObter('OBTIDO')
        setTimeout(()=>{
            alert(`Certificado ${nomeCertificado} obtido`)
        }, 600)
        
    }

    // MOSTRAR NOME COMPLETO
    const [showText, setShowText] = useState(false)

    const handleShowText = () =>{
        setShowText(prev => !prev)
    }

    return ( 
        <>
            {/* DIV PRINCIPAL */}
            <div className={`${obter === "OBTIDO" ? 'brightness-75' : ''} flex justify-end relative transition ease-in-out duration-500`}>

                {/* TEXTO CARD CERTIFICADO */}
                <div className="certificadoCard shadow-md">

                    {/* TEXTOS */}
                    <div className="flex flex-col justify-center items-center w-[100%] py-[5px] pl-[60px] text-white">
                        <h1 onClick={handleShowText} className={`${showText  === false ? 'whitespace-nowrap overflow-hidden text-ellipsis' : 'whitespace-normal'} w-[100%] px-[2px] text-[14px] text-center font-medium cursor-pointer`}>{nomeCertificado.toUpperCase()}</h1>
                        <p className="text-[12px] text-center p-2">{descricaoCertificado}</p>
                    </div>

                    {/* GRUPO E BOTÃO DE OBTER */}
                    <div className="flex justify-between">
                        <div className="flex h-[35px] min-w-[256px] justify-around items-center px-5 rounded-b-[10px] bg-white shadow-md | sm:min-w-[240px]">
                            <div className="flex">
                                <h2 className="text-[#00C174] font-medium">POR:</h2>
                                <img className="w-[40px]" src={`../../images/grupos/${porGrupoImg}.png`} alt="grupo"/>
                            </div>
                            <button onClick={handleObter} className={`obterCert ${obter === 'OBTER' ? 'bg-[#00C174]' : 'bg-[#1e1e1e] pointer-events-none'} transition ease-in-out duration-500`}>{obter}</button>
                        </div>
                    </div>
                </div>

                {/* IMAGEM CERTIFICADO/IMAGEM ADQUIRIDO */}
                <img className='h-[125px] border-[#00C174] border-[4px] rounded-[180px] absolute left-0 top-0' src={`../../images/certificados/${certificadoImg}.png`} alt="certificado"/>
                <img className={`${obter == 'OBTIDO' ? 'absolute top-2 left-0 pr-[5px] w-[35px] brightness-125': 'hidden'} transition ease-in-out duration-500`} src="../../images/obtidoIcon.svg" alt="Obtido Icon"/>
            </div>
        </>
     );
}

