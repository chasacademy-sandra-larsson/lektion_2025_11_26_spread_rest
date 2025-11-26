/*
 * Funktionell programmering och CRUD använder immutable
 * 
 * I funktionell programmering skapar vi nya objekt/arrays istället för att ändra befintliga.
 * Detta gör CRUD-operationer (Create, Read, Update, Delete) säkrare och förutsägbara.
 * 
 * Exempel:
 * - Create: [...products, newProduct]  // ny array
 * - Update: products.map(p => p.id === id ? {...p, ...updates} : p)  // ny array
 * - Delete: products.filter(p => p.id !== id)  // ny array
 */
 

// Create a product
const addProduct = (products, newProduct) => {
     return [...products, { ...newProduct, id: Date.now()}];
}


// Update a product - id, vad den som ska uppdateras med
const updatedProduct = (products, productId, updates) => {
    return products.map(product => {
        return product.id === productId ? {...products, ...updates} : product;
    })
}

// Deleta a product
const removeProduct = (products, productId) => {
    return products.filter(product => product.id !== productId);
}



// Delete a product 
export { addProduct, updatedProduct, removeProduct};


