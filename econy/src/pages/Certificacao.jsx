import CertificadoCard from "../components/CertificadoCard";

export default function Certificacao(){
    return (
        <>
        <div className="flex flex-col items-center">  
            <div className="flex w-[100%] h-[35px] bg-[#005030] justify-center items-center | sm:hidden ">
                <h1 className="text-[#00C174]">CERTIFICAÇÃO</h1>
            </div>
            {/* GRID DE CERTIFICADOS */}
            <div className="scale-90 mt-[-70px] sm:scale-100 sm:mt-[0]">
                <div className="grid grid-cols-[320px] sm:grid-cols-[300px_300px] gap-10 mx-auto my-[30px] | sm:my-0 sm:mb-[30px]">
                    <CertificadoCard certificadoImg='ISO14001' nomeCertificado='ISO 14001' selo='ISO14001' descricaoCertificado='Estabelece critérios para um sistema de gestão ambiental eficaz.' porGrupoImg='SGS'/>
                    <CertificadoCard certificadoImg='GOLDSTANDARD' nomeCertificado='Gold Standard' selo='GOLD' descricaoCertificado='Certifica projetos que geram créditos de carbono de alta qualidade e com benefícios+.' porGrupoImg='DNV'/>
                    <CertificadoCard certificadoImg='GRI' nomeCertificado='Global Reporting Initiative' selo='GRI' descricaoCertificado='Usado globalmente por empresas para comunicar seu desempenho em sustentabilidade.' porGrupoImg='DELOITTE'/>
                    <CertificadoCard certificadoImg='CDP' nomeCertificado='Carbon Disclosure Project' selo='CDP' descricaoCertificado='Ajudando as organizações a mitigar os impactos ambientais e a se tornarem mais sustentáveis.' porGrupoImg='DELOITTE'/>
                    <CertificadoCard certificadoImg='ISO50001' nomeCertificado='ISO 50001' selo='ISO50001' descricaoCertificado='Estabelece requisitos para a implementação, manutenção e melhoria de um Sistema de Gestão de Energia (SGE).' porGrupoImg='SGS'/>
                    <CertificadoCard certificadoImg='SBTI' nomeCertificado='SBTi (Science Based Targets initiative)' selo='SBTI' descricaoCertificado='Auxilia a estabelecer metas de redução de emissões de gases de efeito estufa baseadas na ciência climática.' porGrupoImg='DNV'/>
                    <CertificadoCard certificadoImg='IAEA' nomeCertificado='IAEA (International Atomic Energy Agency)' selo='IAEA' descricaoCertificado='Promove o uso pacífico da energia nuclear e prevenir seu uso para fins militares.' porGrupoImg='DELOITTE'/>
                    <CertificadoCard certificadoImg='DJSI' nomeCertificado='DJSI (Dow Jones Sustainability Index)' selo='DJSI' descricaoCertificado='Avalia e classifica as empresas líderes em sustentabilidade ao redor do mundo.' porGrupoImg='DELOITTE'/>
                </div>
            </div>
        </div>
        </>
    )
}