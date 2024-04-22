function init() {
    // Alert Button
    var alertButton = document.getElementById('btn-alert');
    if (alertButton) {
        alertButton.addEventListener('click', function () {
            alert('Hello, welcome to my website');
        });
    }

    // Hover Button
    var hoverButton = document.getElementById('hoverButton');
    if (hoverButton) {
        hoverButton.addEventListener('mouseover', function () {
            hoverButton.innerText = 'You can do everything';
        });

        hoverButton.addEventListener('mouseleave', function () {
            hoverButton.innerText = 'You know what?';
        });
    }

    // Incrementing Button
    var incrementButton = document.getElementById('btn-increment');
    var decrementButton = document.getElementById('btn-decrement');
    var counterText = document.getElementById('txt-counter');
    var count = 1;

    if (incrementButton && decrementButton && counterText) {
        incrementButton.addEventListener('click', function () {
            count++;
            updateCounterText();
        });

        decrementButton.addEventListener('click', function () {
            count--;
            updateCounterText();
        });
        updateCounterText();
    }

    function updateCounterText() {
        counterText.textContent = 'Give Love: ' + count;

        if (count % 2 === 0) {
            counterText.classList.remove('odd');
            counterText.classList.add('even');
        } else {
            counterText.classList.remove('even');
            counterText.classList.add('odd');
        }
    }

    // Set current year
    var currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Sanity check function
    function sanityCheck() {
        console.log('!Sanity check: all good!');
    }

    // Call sanity check function
    sanityCheck();
}

document.addEventListener('DOMContentLoaded', init);

document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});

