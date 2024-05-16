function setActiveBubble() {
    var windowHeight = window.innerHeight;
    var scrollTop = window.scrollY;
    var middle = scrollTop + windowHeight / 2;

    var closestBubble = null;
    var minDistance = Infinity;

    var bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach(function(bubble) {
        var bubbleRect = bubble.getBoundingClientRect();
        var bubbleMiddle = bubbleRect.top + scrollTop + bubbleRect.height / 2;
        var distanceToMiddle = Math.abs(middle - bubbleMiddle);

        if (distanceToMiddle < minDistance) {
            minDistance = distanceToMiddle;
            closestBubble = bubble;
        }
    });

    bubbles.forEach(function(bubble) {
        bubble.classList.remove('active');
    });

    closestBubble.classList.add('active');
}

window.addEventListener('scroll', setActiveBubble);
window.addEventListener('load', setActiveBubble);
