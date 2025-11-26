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

