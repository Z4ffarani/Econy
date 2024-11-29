import { useState, useEffect } from 'react';
import { getInventory, createResource, updateResource, deleteResource } from '../services/api_rest.jsx';

export default function Dashboard() {
    const [inventory, setInventory] = useState([]);
    
    useEffect(() => {
        const loadInventory = async () => {
            const data = await getInventory();
            setInventory(data);
        };

        loadInventory();
    }, []);
    
    const handleAddResource = async () => {
        const category = document.getElementById('category').value.trim();
        const item = document.getElementById('item').value.trim();
        const quantity = parseInt(document.getElementById('quantity').value.trim(), 10);
        const unitPriceUSD = parseInt(document.getElementById('unitPriceUSD').value.trim(), 10);
        const totalValueUSD = parseInt(document.getElementById('totalValueUSD').value.trim(), 10);
        const supplier = document.getElementById('supplier').value.trim();
        const storageLocation = document.getElementById('storageLocation').value.trim();
        const safetyRating = document.getElementById('safetyRating').value.trim();

        const lastInspectionDate = new Date().toISOString();

        if (isNaN(quantity) || isNaN(unitPriceUSD) || isNaN(totalValueUSD)) {
            alert('Os campos "Quantidade", "Preço Unitário" e "Valor Total" devem ser números válidos.');
            return;
        }
    
        const data = {
            category: category || '-',
            item: item || '-',
            quantity,
            unitPriceUSD,
            totalValueUSD,
            supplier: supplier || '-',
            storageLocation: storageLocation || '-',
            lastInspectionDate,
            safetyRating: safetyRating || '-',
        };
    
        if (!category && !safetyRating) {
            alert('Insira uma Categoria + Periculosidade para adicionar um recurso!');
        } else {
            const created = await createResource(data);
            setInventory((prev) => [...prev, created]);
            alert('Recurso adicionado com sucesso!');
        }
    };
    
    const handleUpdateResource = async () => {
        const inputId = document.getElementById('id').value.trim();
        const category = document.getElementById('category').value.trim();
        const item = document.getElementById('item').value.trim();
        const quantity = document.getElementById('quantity').value.trim();
        const unitPriceUSD = document.getElementById('unitPriceUSD').value.trim();
        const totalValueUSD = document.getElementById('totalValueUSD').value.trim();
        const supplier = document.getElementById('supplier').value.trim();
        const storageLocation = document.getElementById('storageLocation').value.trim();
        const lastInspectionDate = new Date().toISOString();
        const safetyRating = document.getElementById('safetyRating').value.trim();
    
        const updateData = {
            ...(category && { category }),
            ...(item && { item }),
            ...(quantity && !isNaN(parseInt(quantity, 10)) && { quantity: parseInt(quantity, 10) }),
            ...(unitPriceUSD && !isNaN(parseInt(unitPriceUSD, 10)) && { unitPriceUSD: parseInt(unitPriceUSD, 10) }),
            ...(totalValueUSD && !isNaN(parseInt(totalValueUSD, 10)) && { totalValueUSD: parseInt(totalValueUSD, 10) }),
            ...(safetyRating && { safetyRating }),
            ...(supplier && { supplier }),
            ...(storageLocation && { storageLocation }),
            ...(lastInspectionDate && { lastInspectionDate }),
        };
    
        if (!inputId) {
            alert('Insira um ID para atualizar um recurso!');
            return;
        };
    
        const existingItem = inventory.find((item) => item.id === inputId);
        if (!existingItem) {
            alert('ID não encontrado!');
            return;
        };
    
        try {
            const updated = await updateResource(inputId, updateData);
            setInventory((prev) =>
                prev.map((item) => (item.id === inputId ? updated : item))
            );
            alert('Recurso atualizado com sucesso!');
        } catch (error) {
            alert('Erro ao atualizar recurso!');
            console.error(error);
        };
    };    

    const handleDeleteResource = async () => {
        const inputId = document.getElementById('id').value;

        if (!inputId) {
            alert('Insira um ID para deletar um recurso!');
            return;
        };

        const existingItem = inventory.find((item) => item.id === inputId);
        if (!existingItem) {
            alert('ID não encontrado!');
            return;
        };
    
        try {
            await deleteResource(inputId);
            setInventory((prev) => prev.filter((item) => item.id !== inputId));
            alert('Recurso deletado com sucesso!');
        } catch (error) {
            alert('Erro ao deletar recurso!');
        };
    };

    return (
        <>
            <div className="flex w-[100%] h-[35px] bg-[#005030] justify-center items-center | sm:hidden">
                <h1 className="text-[#00C174]">CONTRATOS</h1>
            </div>
            <main className="overflow-x-auto overflow-y-hidden">
                <div className="mt-1 p-4 sm:p-0 sm:px-6 min-w-[1700px]">
                    <div className="grid grid-cols-7">
                        <h1 className="celula | rounded-tl-lg">EMPRESA:</h1>
                        <h1 className="celula">LOCALIDADE:</h1>
                        <h1 className="celula">OPERADOR:</h1>
                        <h1 className="celula">INÍCIO:</h1>
                        <h1 className="celula">REATOR:</h1>
                        <h1 className="celula">CAPACIDADE:</h1>
                        <h1 className="celula | rounded-tr-lg">STATUS:</h1>
                    </div>

                    <div className="grid grid-cols-7">
                        <h1 className="celula3 | rounded-bl-lg">Usina Nuclear Central</h1>
                        <h1 className="celula3">Springfield, USA</h1>
                        <h1 className="celula3">Springfield Energy Inc.</h1>
                        <h1 className="celula3">1982</h1>
                        <h1 className="celula3">PWR (Pressurized Water Reactor)</h1>
                        <h1 className="celula3">1200</h1>
                        <h1 className="celula3 | rounded-br-lg">Operational</h1>
                    </div>
                </div>

                <div className="sm:mt-7 p-3 sm:p-0 sm:px-5 min-w-[1700px]">
                    <div className="grid grid-cols-10 px-1 sm:pr-[19px]">
                        <h1 className="celula2 | rounded-t-lg col-span-1 mr-[20px]">ID:</h1>
                        <h1 className="celula2 | rounded-tl-lg">CATEGORIA:</h1>
                        <h1 className="celula2">ITEM:</h1>
                        <h1 className="celula2">QUANTIDADE:</h1>
                        <h1 className="celula2">PREÇO UNITÁRIO:</h1>
                        <h1 className="celula2">VALOR TOTAL:</h1>
                        <h1 className="celula2">PERICULOSIDADE:</h1>
                        <h1 className="celula2">FORNECEDOR:</h1>
                        <h1 className="celula2">ARMAZENAMENTO:</h1>
                        <h1 className="celula2 text-nowrap | rounded-tr-lg">ÚLTIMA INSPEÇÃO:</h1>
                    </div>

                    <div className='h-[546px] overflow-y-auto px-1 border-b-2 pb-5'>
                        {inventory.length > 0 ? (
                            inventory.map((item) => (
                                <div key={item.id} className="grid grid-cols-10">
                                    <h1 className="celula3 | bg-gradient-to-r mr-[20px] text-[18px] font-medium">{item.id}</h1>
                                    <h1 className="celula3 | text-[15px]">{item.category}</h1>
                                    <h1 className="celula3 | text-[15px]">{item.item}</h1>
                                    <h1 className="celula3 | text-[15px]">{item.quantity}</h1>
                                    <h1 className="celula3 | text-[15px]">{item.unitPriceUSD}</h1>
                                    <h1 className="celula3 | text-[15px]">{item.totalValueUSD}</h1>
                                    <h1 className="celula3 | text-[15px]">{item.safetyRating}</h1>
                                    <h1 className="celula3 | text-[12px]">{item.supplier}</h1>
                                    <h1 className="celula3 | text-[15px]">{item.storageLocation}</h1>
                                    <h1 className="celula3 | text-[12px]">{item.lastInspectionDate}</h1>
                                </div>
                            ))
                        ) : (
                            <p className='text-[30px] text-[#00C174] text-center font-sans py-10 font-semibold'>Carregando inventário...</p>
                        )}
                    </div>
                    <div className='my-5 px-1 flex flex-col'>
                        <div className='w-full'>
                            <div className='grid grid-cols-10 gap-5 overflow-x-auto sm:pb-5 mr-[17px]'>
                                <input id='id' type="text" placeholder='ID' className='input' />
                                <input id='category' type="text" placeholder='CATEGORIA' className='input' />
                                <input id='item' type="text" placeholder='ITEM' className='input' />
                                <input id='quantity' type="text" placeholder='QUANTIDADE' className='input' />
                                <input id='unitPriceUSD' type="text" placeholder='PREÇO UNITÁRIO' className='input' />
                                <input id='totalValueUSD' type="text" placeholder='VALOR TOTAL' className='input' />
                                <input id='safetyRating' type="text" placeholder='PERICULOSIDADE' className='input' />
                                <input id='supplier' type="text" placeholder='FORNECEDOR' className='input' />
                                <input id='storageLocation' type="text" placeholder='ARMAZENAMENTO' className='input' />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <div className='flex gap-3 justify-center sm:justify-center mt-5 mb-[50px] mx-3'>
                <button onClick={handleAddResource} className='botaoCrud'>ADICIONAR</button>
                <button onClick={handleUpdateResource} className='botaoCrud | bg-yellow-500'>ATUALIZAR</button>
                <button onClick={handleDeleteResource} className='botaoCrud | bg-red-500'>DELETAR</button>
            </div>
        </>
    );
};