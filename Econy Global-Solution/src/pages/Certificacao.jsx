import CertificadoCard from "../components/CertificadoCard";

export default function Certificacao(){
    return (
        <>
        <div className="flex flex-col items-center">  
            <div className="flex w-[100%] h-[20px] bg-[#1E1E1E] justify-center items-center mb-5">
                <h1 className="text-[#00C174]">CERTIFICAÇÃO</h1>
            </div>
            {/* GRID DE CERTIFICADOS */}
            <div className="grid grid-cols-1 gap-5 w-[95%] max-w-[320px]">
                <CertificadoCard certificadoImg='BR' nomeCertificado='teste' descricaoCertificado='teste' porGrupoImg='teste'/>
                <CertificadoCard certificadoImg='teste' nomeCertificado='teste' descricaoCertificado='teste' porGrupoImg='teste'/>
                <CertificadoCard certificadoImg='teste' nomeCertificado='teste' descricaoCertificado='teste' porGrupoImg='teste'/>
                <CertificadoCard certificadoImg='teste' nomeCertificado='teste' descricaoCertificado='teste' porGrupoImg='teste'/>
            </div>
        </div>
        </>
    )
}