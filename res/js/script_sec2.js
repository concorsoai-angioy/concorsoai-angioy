function setActiveBlock() {
    var windowHeight = window.innerHeight;
    var scrollTop = window.scrollY;
    var middle = (scrollTop + windowHeight / 2);

    // Trova il blocco più vicino al centro dello schermo
    var closestBlock = null;
    var minDistance = Infinity;

    // Seleziona tutti gli elementi con classe 'block'
    var blocks = document.querySelectorAll('.block');
    // Itera su ciascun blocco
    blocks.forEach(function(block) {
        // Ottieni le dimensioni e la posizione del blocco rispetto alla finestra visualizzata
        var blockRect = block.getBoundingClientRect();
        // Calcola il punto medio verticale del blocco
        var blockMiddle = blockRect.top + scrollTop + blockRect.height / 2;
        // Calcola la distanza assoluta tra il punto medio del blocco e il punto medio dello schermo
        var distanceToMiddle = Math.abs(middle - blockMiddle);

        // Se la distanza al centro dello schermo è minore della distanza minima trovata finora
        if (distanceToMiddle < minDistance) {
            // Aggiorna la distanza minima e il blocco più vicino al centro
            minDistance = distanceToMiddle;
            closestBlock = block;
        }
    });

    // Rimuovi la classe active da tutti i blocchi
    blocks.forEach(function(block) {
        block.classList.remove('active');
    });

    // Aggiungi la classe active al blocco più vicino al centro
    closestBlock.classList.add('active');
}

// Aggiungi un ascoltatore per l'evento scroll per aggiornare il blocco attivo durante lo scrolling
window.addEventListener('scroll', setActiveBlock);

// Chiama la funzione per impostare il blocco attivo quando la pagina viene caricata
window.addEventListener('load', setActiveBlock);
