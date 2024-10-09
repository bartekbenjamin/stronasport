// Zmienna na przechowywanie liczby produktów w koszyku
let totalItems = 0;
// Zmienna na przechowywanie łącznej sumy
let totalPrice = 0;

// Znalezienie wszystkich przycisków "Dodaj do koszyka"
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Znalezienie wszystkich przycisków "Usuń z koszyka"
const removeFromCartButtons = document.querySelectorAll('.remove-from-cart');

// Funkcja obsługująca kliknięcie przycisku "Dodaj do koszyka"
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        // Znalezienie ceny produktu
        const product = event.target.parentElement;
        const price = parseInt(product.querySelector('.price').textContent);

        // Zaktualizowanie liczby produktów i łącznej ceny
        totalItems++;
        totalPrice += price;

        // Wyświetlenie nowych wartości w koszyku
        document.getElementById('cart-items').textContent = totalItems;
        document.getElementById('total-price').textContent = totalPrice;
    });
});

// Funkcja obsługująca kliknięcie przycisku "Usuń z koszyka"
removeFromCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        // Znalezienie ceny produktu
        const product = event.target.parentElement;
        const price = parseInt(product.querySelector('.price').textContent);

        // Zaktualizowanie liczby produktów i łącznej ceny, jeśli są produkty w koszyku
        if (totalItems > 0) {
            totalItems--;
            totalPrice -= price;

            // Wyświetlenie nowych wartości w koszyku
            document.getElementById('cart-items').textContent = totalItems;
            document.getElementById('total-price').textContent = totalPrice;
        }
    });
});