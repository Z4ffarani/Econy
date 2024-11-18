import { useParams } from "react-router-dom"
import dados from "../data/empresas.json"

export default function GerenciarContrato(){

    const { contrato } = useParams()
    const IDS = JSON.parse(localStorage.getItem('IDS'))

    const contratoDados = dados.find(item => item.id === contrato)

    return(
        <>
        <div className="flex flex-col justify-center items-center">
            {
                contrato in IDS ?
                <>  
                    <div className="flex flex-col justify-center items-center max-w-[320px]">
                        <img  className="w-[320px] rounded-[15px] p-2" src={`../../images/empresas/${contratoDados.url}.png`} alt={`${contratoDados.nome}`} />
                        <div className="flex flex-col items-center">
                            <h1>CONTRATO EXEMPLO:</h1>
                            <p className="w-[90%] p-2 bg-[#c9c9c9] rounded-[15px] text-justify text-[12px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis esse voluptatum numquam nesciunt, labore obcaecati ex, iste quisquam excepturi, doloremque quae quam tempore rerum atque quaerat ab nemo! Distinctio, nostrum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus dolor nobis deleniti, repellendus sed pariatur tempora rerum nemo culpa placeat commodi et sequi voluptatum expedita quidem delectus? Quis, aspernatur ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate enim rerum, nulla amet ab labore repellat reprehenderit facere necessitatibus? Eum alias laboriosam modi natus ratione ullam. Asperiores corporis consequatur aliquid!</p>
                        </div>
                    </div>
                </>
                : 
                <p>Pagina não encontrada</p>
            }
        </div>
           
        </>
    )
}