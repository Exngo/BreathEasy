//tooltip display.
document.querySelector('.tooltip-button').addEventListener('click', function() {
    var tooltipContent = document.querySelector('.tooltip-content');
    tooltipContent.style.display = tooltipContent.style.display === 'block' ? 'none' : 'block';
});


// Listener for the "Tooltips" toggle
document.getElementById('toggleTooltips').addEventListener('change', function() {
    const tooltips = document.querySelectorAll('.tooltip');
    if (this.checked) {
        console.log('Tooltips are ON');
        tooltips.forEach(function(tooltip) {
            tooltip.classList.add('show');
        });
    } else {
        console.log('Tooltips are OFF');
        tooltips.forEach(function(tooltip) {
            tooltip.classList.remove('show');
        });
    }
});
//Tooltips end

// Listener for the "Font Size" toggle
var h1Elements = document.querySelectorAll('h1');
var h2Elements = document.querySelectorAll('h2');
var h3Elements = document.querySelectorAll('h3');
var pElements = document.querySelectorAll('p');
document.getElementById('toggleFontSize').addEventListener('change', function() {
    if (this.checked) {
        console.log('Large Font Size is ON');
        // Actions to increase the font size across the application
        document.getElementById('navbarID').style.fontSize='4rem';
        h1Elements.forEach(function(h1) {h1.style.fontSize = '4rem';});
        h2Elements.forEach(function(h2) {h2.style.fontSize = '3rem';});
        h3Elements.forEach(function(h3) {h3.style.fontSize = '2.5rem';});
        pElements.forEach(function(p) {p.style.fontSize = '2rem';});
    }
    else {
        document.getElementById('navbarID').style.fontSize='1.3rem';
        h1Elements.forEach(function(h1) {h1.style.fontSize = '2.3rem'});
        h2Elements.forEach(function(h2) {h2.style.fontSize = '2.0rem'});
        h3Elements.forEach(function(h3) {h3.style.fontSize = '1.4rem'});
        pElements.forEach(function(p) {p.style.fontSize = '1.2rem'});
    }});
//Font Size end

// Listener for the "Contrast" toggle
document.getElementById('toggleContrast').addEventListener('change', function() {
    if (this.checked) {
        console.log('High Contrast is ON');
        // Actions to apply a high contrast theme
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#FFF';
        document.getElementById('landingSection').style.filter = 'invert(100%)';
    } else {
        console.log('High Contrast is OFF');
        // Actions to revert to the normal contrast theme
        document.body.style.backgroundColor = 'initial';
        document.body.style.color = 'initial';
        document.getElementById('landingSection').style.filter = 'invert(0%)';
    }
});
//Contrast end.
//extracted_unworking.
/**document.querySelectorAll('nav & header').forEach(function(element) {
    element.style.backgroundColor = '#000';
    element.style.color = '#FFF';
});**/

/**Preview js_start*/
//duration display
document.getElementById('durationSlider').addEventListener('input', function() {
    document.getElementById('durationDisplay').textContent = this.value + ' seconds';
});

function startLoading() {
    document.getElementById('controls').style.display = 'none'; // Hide all controls
    document.getElementById('infoDisplay').style.display = 'block'; // Show chosen settings

    const duration = parseInt(document.getElementById('durationSlider').value);
    const intervalA = parseInt(document.getElementById('intervalSelectA').value);
    const intervalB = parseInt(document.getElementById('intervalSelectB').value);

    document.getElementById('chosenDuration').textContent = "Chosen Exercise Duration: " + duration + ' seconds';
    document.getElementById('chosenInterval').textContent = "Chosen Intervals: Breath In = " + intervalA + 's, Breath Out = ' + intervalB + 's';

    document.getElementById('stopButton').style.display = 'block';
    startAnimation(duration, intervalA, intervalB);
}

function stopLoading() {
    cancelAnimationFrame(requestId); // Stop the animation
    document.getElementById('controls').style.display = 'block'; // Show controls again
    document.getElementById('infoDisplay').style.display = 'none'; // Hide chosen settings
    document.getElementById('stopButton').style.display = 'none';
    document.querySelector('.progress-ring__circle').style.strokeDashoffset = 565.48; // Reset the loading bar
    document.querySelector('.inner-circle').style.backgroundColor = '#fff'; // Reset inner circle color
}

let requestId;
function startAnimation(duration, intervalA, intervalB) {
    let elapsed = 0;
    let currentInterval = intervalA;
    let nextChange = currentInterval * 1000;
    let colorFlip = true;

    const circle = document.querySelector('.progress-ring__circle');
    const innerCircle = document.querySelector('.inner-circle');
    let lastUpdate = Date.now();

    function animate() {
        const now = Date.now();
        const deltaTime = now - lastUpdate;

        elapsed += deltaTime;

        if (elapsed >= nextChange) {
            colorFlip = !colorFlip;
            innerCircle.style.backgroundColor = colorFlip ? '#FF6347' : '#00ff00'; // Alternate colors
            currentInterval = colorFlip ? intervalB : intervalA;
            nextChange += currentInterval * 1000;
        }

        const progress = elapsed / (duration * 1000);
        const offset = 565.48 * (1 - progress);
        circle.style.strokeDashoffset = offset;

        lastUpdate = now;

        if (progress < 1) {
            requestId = requestAnimationFrame(animate);
        } else {
            stopLoading();
        }
    }

    requestId = requestAnimationFrame(animate);
}

/**Preview js_end*/
document.getElementById('toggleContrast').addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('high-contrast');
    } else {
        document.body.classList.remove('high-contrast');
    }
});




/**incrimental font increase _start
function increaseFontSize() {
    var body = document.body;
    var style = window.getComputedStyle(body, null).getPropertyValue('font-size');
    var currentSize = parseFloat(style);
    body.style.fontSize = (currentSize + 1) + 'px';
}

function decreaseFontSize() {
    var body = document.body;
    var style = window.getComputedStyle(body, null).getPropertyValue('font-size');
    var currentSize = parseFloat(style);
    body.style.fontSize = (currentSize - 1) + 'px';
}
incrimental font increase _end*/