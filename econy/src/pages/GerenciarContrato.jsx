
import { useParams, Link } from "react-router-dom"
import dados from "../data/empresas.json"
import { useEffect, useState } from "react"

export default function GerenciarContrato(){

    const { contrato } = useParams()
    const IDS = JSON.parse(localStorage.getItem('IDS'))
    const contratoDados = dados.find(item => item.id === contrato)
    const [realizado, setRealizado] = useState("")

    useEffect(() => {
        if (IDS[contrato].includes("realizado")){
            setRealizado("contrato realizado")
        }
        else{
            setRealizado("realizar contrato")
        }

    },[IDS, contrato])

    // CANCELAR CONTRATO
    const cancelar = () => {
        delete IDS[contrato];
        localStorage.setItem('IDS', JSON.stringify(IDS))
        alert('Contrato cancelado')

    }

    // REALIZAR
    const realizar = () => {
        const valorContrato = parseFloat(contratoDados.valor)
        let creditos = JSON.parse(localStorage.getItem('carbonCred'))
        
        // adicionar estado de contrato realizado no dicionario 
        IDS[contrato].push("realizado")
        // atualizar dicionario de registros no localStorage
        localStorage.setItem('IDS', JSON.stringify(IDS));
        
        // muda estado do botão de contrato
        setRealizado("contrato realizado")
        console.log(IDS)


        // transfere o valor base do milhão de creditos, para a variavel creditos, para que o valor possa se atualizar.
        if (creditos === null || isNaN(creditos)) {
            creditos = 1000000;
        }
        // atualizar créditos no local storage
        creditos = creditos + valorContrato
        localStorage.setItem('carbonCred', JSON.stringify(creditos))

         setTimeout(()=>{
            // para que o valor no header atualize após redirecionamento(se houver tempo implementar useContext )
            window.location.reload()
        }, 500)

    }


    return(
        
        <div className="flex flex-col justify-center items-center my-[20px] | sm:mt-0">
            {
                // condicional verifica se o ID da pagina corresponde a um ID real
                contrato in IDS ?
                <>  
                    <div className="flex flex-col justify-center items-center max-w-[320px] gap-2 | sm:w-[640px]">
                        <div className="sm:grid sm:grid-cols-[320px_320px] sm:grid-rows-2">
                            <div className="flex flex-col items-center">
                                <h1 className="w-[90%] p-1 text-[16px] text-center text-white font-medium bg-[#00C174] rounded-md">{contratoDados.nome}</h1>
                                <img  className="w-[320px] rounded-[30px] p-4" src={`../../images/empresas/${contratoDados.url}.png`} alt={`${contratoDados.nome}`} />
                            </div>
                            <div className="flex flex-col items-center | sm:col-start-2 sm:row-start-1 sm:row-end-3 sm:gap-4">
                                <p className="w-[90%] p-2 bg-[#c9c9c9] rounded-[15px] text-justify text-[12px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis esse voluptatum numquam nesciunt, labore obcaecati ex, iste quisquam excepturi, doloremque quae quam tempore rerum atque quaerat ab nemo! Distinctio, nostrum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus dolor nobis deleniti, repellendus sed pariatur tempora rerum nemo culpa placeat commodi et sequi voluptatum expedita quidem delectus? Quis, aspernatur ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate enim rerum, nulla amet ab labore repellat reprehenderit facere necessitatibus? Eum alias laboriosam modi natus ratione ullam. Asperiores corporis consequatur aliquid!</p>
                            </div>
                        
                       
                        
                            {/* botão de gerenciar contrato */}
                            <div className="mt-4 flex flex-col justify-center items-center w-[100%] gap-2 |sm:row-start-2 sm:justify-start sm:gap-0">
                                <div className="contratoCompra w-[88%] border-2 rounded-[10px] | sm:p-[2px] sm:text-[20px]">
                                    <p>COMPRA</p>
                                    <img className="w-[25px]" src="../../images/iconCO2.png" alt="CO2"/>
                                    <p>{contratoDados.contrato}</p>
                                </div>
                                <div className="flex gap-2 ">
                                    <button onClick={realizar} className={`buttonGerenciar | ${realizado === "contrato realizado" ? " w-[270px] bg-[#1E1E1E] border-[#1E1E1E] pointer-events-none" : ""} transition ease-in-out duration-500`}>{realizado}</button>
                                    <Link to={'/contratos'}><button onClick={cancelar} className={`buttonGerenciar | ${realizado === "contrato realizado" ? "hidden pointer-events-none" : ""}`}>cancelar contrato</button></Link>
                                </div>
                                <Link to={'/contratos'}><p className="underline text-[#005030] pt-2">retornar</p></Link>
                            </div>
                        </div>
                    </div>
                </>
                : 
                <p>Pagina não encontrada</p>
            }
        </div>

  );
}