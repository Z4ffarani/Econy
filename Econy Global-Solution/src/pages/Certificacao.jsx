import CertificadoCard from "../components/CertificadoCard";

export default function Certificacao(){
    return (
        <>
        <div className="flex flex-col items-center">  
            <div className="flex w-[100%] h-[25px] bg-[#1E1E1E] justify-center items-center mb-5">
                <h1 className="text-[#00C174]">CERTIFICAÇÃO</h1>
            </div>
            {/* GRID DE CERTIFICADOS */}
            <div className="grid grid-cols-[320px] sm:grid-cols-[320px_320px]  gap-5 mx-auto max-w-[95%]">
                <CertificadoCard certificadoImg='ISO14001' nomeCertificado='ISO 14001' descricaoCertificado='Estabelece critérios para um sistema de gestão ambiental eficaz.' porGrupoImg='SGS'/>
                <CertificadoCard certificadoImg='GOLDSTANDARD' nomeCertificado='Gold Standard' descricaoCertificado='Certifica projetos que geram créditos de carbono de alta qualidade e com benefícios+.' porGrupoImg='DNV'/>
                <CertificadoCard certificadoImg='GRI' nomeCertificado='Global Reporting Initiative' descricaoCertificado='Usado globalmente por empresas para comunicar seu desempenho em sustentabilidade.' porGrupoImg='DELOITTE'/>
                <CertificadoCard certificadoImg='CDP' nomeCertificado='Carbon Disclosure Project' descricaoCertificado='Ajudando as organizações a mitigar os impactos ambientais e a se tornarem mais sustentáveis.' porGrupoImg='DELOITTE'/>
            </div>
        </div>
        </>
    )
}