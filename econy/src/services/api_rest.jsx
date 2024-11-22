const API_URL = 'https://673b49f6339a4ce4451b86be.mockapi.io/nuclearPlant';

export const getInventory = async () => {
    const response = await fetch(API_URL);
    return await response.json();
}

export const createResource = async (data) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    });
    return await response.json();
}

export const updateResource = async (id, data) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    });
    return await response.json();
}

export const deleteResource = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });
    return await response.json();
}