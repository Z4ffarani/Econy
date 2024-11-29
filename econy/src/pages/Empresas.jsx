import { useState } from "react"
import dados from "../data/empresas.json"
import EmpresaCard from "../components/EmpresasCard"

export default function Empresas(){

    const [search, setSearch] = useState("")

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    // constante que verifica se há o elemento dentro do JSON 'dados.json'.
    const searchEmpresas = dados.filter(empresa => empresa.busca.toLowerCase().includes(search.toLowerCase()))
    
    return (
        <div>  
            <div className="flex w-[100%] h-[35px] bg-[#005030] justify-center items-center | sm:hidden">
                <h1 className="text-[#00C174]">EMPRESAS</h1>
            </div>

            <div className="scale-95 mt-[-60px] sm:scale-100 sm:mt-[0]">
                {/* Area de busca e display de empresas */}
                <div className="flex flex-col items-center my-[30px] gap-3 | sm:mt-0">

                    {/* Barra de pesquisa, que tem como valor o pesquisar(search) que aciona uma função que observa alterações no elemento e que será 'jogada' no searchEmpresas, para verificar se esta incluso no JSON*/}
                    <input
                        className="w-[320px] text-[#005030] p-[4px] pl-2 border-[#005030] border-2 rounded-[10px] mx-auto | sm:w-[640px]"
                        type="text"
                        id="search"
                        value={search}
                        onChange={handleSearch}
                        placeholder="Digite o nome da empresa..."
                    />
                    
                    {/* DIV com componente que ao passar pelos dados da constante de pesquisa, atribui as informações necessárias para o componente */}
                    <div className="grid grid-cols-[320px] justify-center gap-10 mx-auto max-w-[95%] |  sm:grid-cols-[300px_300px] ">
                        {   
                            // if ternário, se não houver empresas compativeis com o que for digitado, apresenta mensagem de "erro"
                            searchEmpresas.length > 0 ?

                                searchEmpresas.map(empresa => (
                                    
                                    <EmpresaCard
                                                key={empresa.url}
                                                empresaImg={empresa.url} 
                                                empresaNome={empresa.nome}
                                                selos={empresa.selos}
                                                empresaPais={empresa.pais}
                                                empresaDescricao={empresa.descricao}
                                                empresaCreditos={empresa.creditos}
                                                id={empresa.id}/>
                                                
                                ))
                            :
                            <p>Empresa não disponível.</p>
                            
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}