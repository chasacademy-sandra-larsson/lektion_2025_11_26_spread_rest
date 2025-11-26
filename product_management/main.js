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
  

        // Återställ formuläret


        // Render productlist


    }

});


// Handle edit and remove
productListEl.addEventListener("click", (event) => {
    
    const id = Number(event.target.dataset.id); 

    // Delete
    if(event.target.classList.contains("btn-delete")) {

        // Update state
    


    }

    // Edit
    if(event.target.classList.contains("btn-edit")) {

        const product = currentProducts.find(product => product.id === id);

        if(!product) return;

  

        // New uodated object
        

        if(newName && newPrice) {

            // Update state - id skickas separat, inte i updates-objektet
   
        }
    }

});
