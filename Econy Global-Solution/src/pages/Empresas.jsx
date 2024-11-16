import { useEffect, useState } from "react"
import dados from "../data/empresas.json"

export default function Empresas(){

    const [search, setSearch] = useState("")
    const [empresas, setEmpresas] = useState([])

    useEffect(() =>{
        setEmpresas(dados)
    }, []);

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    // constante que verifica se há o elemento dentro do JSON dados.
    const searchEmpresas = dados.filter(empresa => empresa.nome.toLowerCase().includes(search.toLowerCase()))
    
    return (
        <>
        <div className="flex flex-col">  
            <div className="flex w-[100%] h-[25px] bg-[#1E1E1E] justify-center items-center">
                <h1 className="text-[#00C174]">EMPRESAS</h1>
            </div>

            {/* Barra de pesquisa, que tem como valor o pesquisar(search) que aciona uma função que observa alterações no elemento e que será 'jogada' no searchEmpresas, para verificar se esta incluso no JSON*/}
            <input
                className="text-black"
                type="text"
                id="search"
                value={search}
                onChange={handleSearch}
                placeholder="Digite o nome da empresa..."
            />
            <div>
                {/* DIV com componente que ao passar pelos dados da constante de pesquisa, atribui as informações necessárias para o componente */}
                {
                    searchEmpresas.length > 0 ?

                        searchEmpresas.map(empresa => (
                            <h1>Me achou rs {empresa.nome}</h1>

                        ))
                    :
                    <p>empresa não disponível</p>
                }
            </div>
        </div>
        </>
    )
}