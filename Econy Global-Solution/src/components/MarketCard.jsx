export default function MarketCard({mercado, preco, ytd, cambio, pais}) {
    
    return (
        <>
            <div className="marketCard max-w-[640px]">
                <img className="h-[40px]" src={`../../images/paises/${pais}.png`} alt="country" />

                <div className="sm:w-[60px] sm:flex sm:flex-col sm:justify-center sm:items-center">
                    <h1 className="sm:text-[12px]">MERCADO:</h1>
                    <p className="sm:text-[16px]">{mercado}</p>
                </div>

                <span>|</span>

                <div className="sm:w-[60px] sm:flex sm:flex-col sm:justify-center sm:items-center">
                    <h1 className="sm:text-[12px]">PREÇO:</h1>
                    <p className="text-[#0B917B] | sm:text-[16px]">{preco}</p>
                </div>

                <span>|</span>

                <div className="sm:w-[60px] sm:flex sm:flex-col sm:justify-center sm:items-center">
                    <h1 className="sm:text-[12px]">YTD</h1>
                    <p className={`${
                            ytd === 0 ? 'text-[#6D6D6D]' :
                            ytd > 0 ? 'text-[#0B917B]' : 'text-[#B62D34]'
                        }   sm:text-[16px]`}>{ytd}%</p>
                </div>

                <span>|</span>

                <div className="sm:w-[60px] sm:flex sm:flex-col sm:justify-center sm:items-center">
                    <h1 className="sm:text-[12px]">CÂMBIO</h1>
                    <p className={`${
                            cambio === 0 ? 'text-[#6D6D6D]' :
                            cambio > 0 ? 'text-[#0B917B]' : 'text-[#B62D34]'
                        }   sm:text-[16px]`}>{cambio}%</p>
                </div>
                
                <button className="rounded-[10px] bg-white p-[5px] text-[10px] text-[#00C174] shadow-md hover:bg-[#00C174] hover:text-white transition duration-500 | sm:text-[14px]">
                    GRÁFICO
                </button>
            </div>
        </>
     );
}

