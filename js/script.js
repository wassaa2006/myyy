function showCard(id) {
    const cards = document.querySelectorAll('.card');
    
    // sembunyikan semua card
    cards.forEach(card => {
        card.classList.remove('show');
        setTimeout(() => card.style.display = "none", 300);
    });

    // tampilkan card yang dipilih dengan animasi
    const target = document.getElementById(id);
    target.style.display = "block";

    // delay dikit biar animasi smooth
    setTimeout(() => {
        target.classList.add('show');
    }, 10);
}
