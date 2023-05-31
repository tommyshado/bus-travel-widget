// get input reference elements for the bus travel widget
const numberOfPoints = document.querySelector('.numberOfPoints');
const destination = document.querySelector('#destination');

// get the calculate dom elements reference for the bus travel widget
const singleTripsNum = document.querySelector('.singleTripsNumber');

// buttons
const calculateBtn = document.querySelector('.calculateBtn');


// variable to be reassigned with values that we will get from the local storage and then pass them into the factory function as arguments
let singleTrip = 0;


// local storage code
if (localStorage['singleTrips']) {
    // get the value in the local storage
    singleTrip = Number(localStorage['singleTrips']);
    singleTripsNum.innerHTML = singleTrip;
}

// factory function instance for the bus travel widget
const busTravelAppInstance = BusTravelApp(singleTrip);

// events elements
calculateBtn.addEventListener('click', function() {
    // get the reference to the peak and off peak radio buttons
    const peakOffPeakRadio = document.querySelector('input[name="peakOffPeak"]:checked');
    // get reference to the checkbox of the return trip
    const returnTripCheckbox = document.querySelector('input[name="returnTripCheckbox"]:checked');

    if (returnTripCheckbox) {
        // 
    } else {
        // get the value from the input text box
        busTravelAppInstance.pointsOfSingleTrips(numberOfPoints.value, destination.value);
        singleTripsNum.innerHTML = busTravelAppInstance.getSingleTripAmount();
        localStorage.setItem('singleTrips', singleTripsNum.innerHTML);
    }
});
