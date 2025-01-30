function showPopup(productName, price) {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popup-title").innerText = productName;
    document.getElementById("quantity").value = 1;
    document.getElementById("slider").value = 1;
    updatePrice(price);
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function syncInput() {
    document.getElementById("quantity").value = document.getElementById("slider").value;
    updatePrice(75000);
}

function updatePrice(price = 75000) {
    let quantityInput = document.getElementById("quantity");
    let sliderInput = document.getElementById("slider");
    
    // Ambil nilai dan pastikan integer
    let quantity = parseInt(quantityInput.value);

    // Validasi: jika kosong atau bukan angka, default ke 1
    if (isNaN(quantity) || quantity < 1) {
        quantity = 0;
    } else if (quantity > 10) {
        quantity = 10;
    }

    // Set nilai yang sudah divalidasi
    quantityInput.value = quantity;
    sliderInput.value = quantity;

    // Hitung total harga
    let total = quantity * price;
    document.getElementById("total-price").innerText = `Rp ${total.toLocaleString()}`;

    // Perbarui link order WhatsApp
    document.getElementById("order-link").href = 
        `https://wa.me/+62882007085761?text=Saya ingin memesan ${quantity} ${document.getElementById("popup-title").innerText} seharga Rp ${total.toLocaleString()}`;
}
