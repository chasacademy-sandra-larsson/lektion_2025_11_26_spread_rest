// --- UI Logic ---

// State
let currentProducts = [];

// DOM Elements
const productListEl = document.getElementById('product-list');
const addProductForm = document.getElementById('add-product-form');
const nameInput = document.getElementById('product-name');
const priceInput = document.getElementById('product-price');


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
