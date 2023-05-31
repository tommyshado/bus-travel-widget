// get input reference elements for the bus travel widget
const numberOfPoints = document.querySelector('.numberOfPoints');
const destination = document.querySelector('#destination');

// get the calculate dom elements reference for the bus travel widget
const calculateBtn = document.querySelector('.calculateBtn');


// variable to be reassigned with values that we will get from the local storage and then pass them into the factory function as arguments

// factory function instance for the bus travel widget

// events elements
calculateBtn.addEventListener('click', function() {
    // get the reference to the peak and off peak radio buttons
    const peakOffPeakRadio = document.querySelector('input[name="peakOffPeak"]:checked');
    // get reference to the checkbox of the return trip
    const returnTripCheckbox = document.querySelector('input[name="returnTripCheckbox"]');
});
