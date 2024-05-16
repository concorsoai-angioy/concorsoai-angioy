function setActivebubble() {
    var windowHeight = window.innerHeight;
    var scrollTop = window.scrollY;
    var middle = (scrollTop + windowHeight / 2);

    // Trova il blocco più vicino al centro dello schermo
    var closestbubble = null;
    var minDistance = Infinity;

    // Seleziona tutti gli elementi con classe 'bubble'
    var bubbles = document.querySelectorAll('.bubble');
    // Itera su ciascun blocco
    bubbles.forEach(function(bubble) {
        // Ottieni le dimensioni e la posizione del blocco rispetto alla finestra visualizzata
        var bubbleRect = bubble.getBoundingClientRect();
        // Calcola il punto medio verticale del blocco
        var bubbleMiddle = bubbleRect.top + scrollTop + bubbleRect.height / 2;
        // Calcola la distanza assoluta tra il punto medio del blocco e il punto medio dello schermo
        var distanceToMiddle = Math.abs(middle - bubbleMiddle);

        // Se la distanza al centro dello schermo è minore della distanza minima trovata finora
        if (distanceToMiddle < minDistance) {
            // Aggiorna la distanza minima e il blocco più vicino al centro
            minDistance = distanceToMiddle;
            closestbubble = bubble;
        }
    });

    // Rimuovi la classe active da tutti i blocchi
    bubbles.forEach(function(bubble) {
        bubble.classList.remove('active');
    });

    // Aggiungi la classe active al blocco più vicino al centro
    closestbubble.classList.add('active');
}

// Aggiungi un ascoltatore per l'evento scroll per aggiornare il blocco attivo durante lo scrolling
window.addEventListener('scroll', setActivebubble);

// Chiama la funzione per impostare il blocco attivo quando la pagina viene caricata
window.addEventListener('load', setActivebubble);
