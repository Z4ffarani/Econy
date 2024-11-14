export default function MarketCard({mercado, preco, ytd, cambio, pais}) {
    
    

    return (
        <>
            <div className="marketCard">
                <img className="h-[40px]" src={`../../images/${pais}.png`} alt="country" />

                <div>
                    <h1>MERCADO:</h1>
                    <p>{mercado}</p>
                </div>

                <span>|</span>

                <div>
                    <h1>PREÇO:</h1>
                    <p className="text-[#0B917B]">{preco}</p>
                </div>

                <span>|</span>

                <div>
                    <h1>YTD</h1>
                    <p className={`${
                            ytd === 0 ? 'text-[#6D6D6D]' :
                            ytd > 0 ? 'text-[#0B917B]' : 'text-[#B62D34]'
                        }`}>{ytd}%</p>
                </div>

                <span>|</span>

                <div>
                    <h1>CÂMBIO</h1>
                    <p className={`${
                            cambio === 0 ? 'text-[#6D6D6D]' :
                            cambio > 0 ? 'text-[#0B917B]' : 'text-[#B62D34]'
                        }`}>{cambio}%</p>
                </div>
                
                <button className="rounded-[10px] bg-white p-[5px] text-[10px] text-[#00C174] shadow-md hover:bg-[#00C174] hover:text-white transition duration-500">
                    GRÁFICO
                </button>
            </div>
        </>
     );
}

