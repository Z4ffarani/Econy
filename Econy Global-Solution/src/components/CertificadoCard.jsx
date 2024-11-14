export default function CertificadoCard({certificadoImg, nomeCertificado, descricaoCertificado, porGrupoImg}) {
    
    return ( 
        <>
            <div className="flex justify-end relative">
                <div className="certificadoCard w-[80%] h-[125px]">
                    <h1>{nomeCertificado}</h1>
                    <p>{descricaoCertificado}</p>
                    <div className="flex w-[100%] justify-between">
                        <div className="flex">
                            <h2>POR:</h2>
                            <img src={`../../public/images/${porGrupoImg}.png`} alt="grupo"/>
                        </div>
                    </div>
                </div>
                <img className='h-[125px] border-[#00C174] border-[4px] rounded-[180px] absolute left-0 top-0' src={`../../public/images/${certificadoImg}.png`} alt="certificado" />
            </div>
        </>
     );
}

