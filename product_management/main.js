import { addProduct, updatedProduct, removeProduct } from "./src/api.js"

// --- UI Logic ---

// State
let currentProducts = [];

// DOM Elements
const productListEl = document.getElementById('product-list');
const addProductForm = document.getElementById('add-product-form');
const nameInput = document.getElementById('product-name');
const priceInput = document.getElementById('product-price');


function render() {
    productListEl.innerHTML = '';

    if (currentProducts.length === 0) {
        productListEl.innerHTML = '<p class="empty-state">No products added yet.</p>';
        return;
    }

    currentProducts.forEach(product => {
        const item = document.createElement('div');
        item.className = 'product-item';
        item.innerHTML = `
            <div class="product-info">
                <h3>${product.name}</h3>
                <span class="product-price">$${parseFloat(product.price).toFixed(2)}</span>
            </div>
            <div class="actions">
                <button class="btn-edit" data-id="${product.id}">Edit</button>
                <button class="btn-delete" data-id="${product.id}">Delete</button>
            </div>
        `;
        productListEl.appendChild(item);
    })
}


// New produt - form submit
addProductForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const name = nameInput.value;
    const price = priceInput.value;

    if(name && price) {
            
        const newProduct = {name, price};

        // Uppdatera state
        currentProducts = addProduct(currentProducts, newProduct);

        // Återställ formuläret
        addProductForm.reset();

        // Render productlist
        render();
        console.log("State (currentList) with addProducts", currentProducts);

    }

});


// Handle edit and remove
productListEl.addEventListener("click", (event) => {
    
    // Hämtar id:et för produkten vi klickar på
    const id = Number(event.target.dataset.id); 

    // Delete
    if(event.target.classList.contains("btn-delete")) {

        // Update state
        currentProducts = removeProduct(currentProducts, id);

        // Render UI
        render();

        console.log("State updated with Remove", currentProducts);


    }

    // Edit
    if(event.target.classList.contains("btn-edit")) {

        const product = currentProducts.find(product => product.id === id);

        if(!product) return;

        const newName = prompt("Enter new product name: ", product.name);
        const newPrice = prompt("Enter new product price: ", product.price);

        // New updated object
        const updates = {
            name: newName,
            price: parseFloat(newPrice)
        }
        

        if(newName && newPrice) {

            // Update state - id skickas separat, inte i updates-objektet
            currentProducts = updatedProduct(currentProducts, id, updates);

            // Render UI
            render();
            console.log("State updated (Update)", currentProducts);
            
        }
    }

});
