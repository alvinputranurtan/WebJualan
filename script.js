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
    let quantity = document.getElementById("quantity").value;
    document.getElementById("slider").value = quantity;
    let total = quantity * price;
    document.getElementById("total-price").innerText = `Rp ${total.toLocaleString()}`;
    document.getElementById("order-link").href = `https://wa.me/+62882007085761?text=Saya ingin memesan ${quantity} ${document.getElementById("popup-title").innerText} seharga Rp ${total.toLocaleString()}`;
}
