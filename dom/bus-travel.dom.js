// get input reference elements for the bus travel widget
const numberOfPoints = document.querySelector('.numberOfPoints');
const destination = document.querySelector('#destination');

// get the calculate dom elements reference for the bus travel widget
const singleTripsNum = document.querySelector('.singleTripsNumber');
const singleTripPrice = document.querySelector('.singleTripsPrice');
const tripsReturn = document.querySelector('.numberOfReturnTrips');
const returnTripPrice = document.querySelector('.returnTripCost');

// buttons
const calculateBtn = document.querySelector('.calculateBtn');


// variable to be reassigned with values that we will get from the local storage and then pass them into the factory function as arguments

// single trips
let singleTrip = 0;
let singleTripCostVar = 0;

// return trips
let returnTripsPointsVar = 0;
let returnTripsCostVar = 0;

// local storage code

// single trips

if (localStorage['singleTrips']) {
    // get the value in the local storage
    singleTrip = Number(localStorage['singleTrips']);
    singleTripsNum.innerHTML = singleTrip;
}

if (localStorage['singleTripCost']) {
    singleTripCostVar = Number(localStorage['singleTripCost']);
    singleTripPrice.innerHTML = singleTripCostVar;
}

// return trips

if (localStorage['pointsForTripsReturn']) {
    returnTripsPointsVar = Number(localStorage['pointsForTripsReturn']);
    tripsReturn.innerHTML = returnTripsPointsVar;
}

if (localStorage['costPricePerReturn']) {
    returnTripsCostVar = Number(localStorage['costPricePerReturn']);
    returnTripPrice.innerHTML = returnTripsCostVar;
}

// factory function instance for the bus travel widget
const busTravelAppInstance = BusTravelApp(singleTrip, singleTripCostVar, returnTripsPointsVar, returnTripsCostVar);

// events elements
calculateBtn.addEventListener('click', function() {
    // get the reference to the peak and off peak radio buttons
    const peakOffPeakRadio = document.querySelector('input[name="peakOffPeak"]:checked');
    // get reference to the checkbox of the return trip
    const returnTripCheckbox = document.querySelector('input[name="returnTripCheckbox"]:checked');

    if (returnTripCheckbox && peakOffPeakRadio) {
        // this is the case for when the points are greater than 2 which is a return trip
        busTravelAppInstance.pointsOfTrips(numberOfPoints.value, destination.value, returnTripCheckbox.value);
        tripsReturn.innerHTML = busTravelAppInstance.getReturnTripsPoints();

        // return trip cost price code
        busTravelAppInstance.tripsCost(peakOffPeakRadio.value);
        returnTripPrice.innerHTML = busTravelAppInstance.getReturnTripCost();

        // local storage for trips return
        localStorage.setItem('pointsForTripsReturn', tripsReturn.innerHTML);
        localStorage.setItem('costPricePerReturn', returnTripPrice.innerHTML);

    } else if (peakOffPeakRadio) {
        // get the value from the input text box
        busTravelAppInstance.pointsOfTrips(numberOfPoints.value, destination.value);
        singleTripsNum.innerHTML = busTravelAppInstance.getSingleTripPoints();

        // single trip cost
        busTravelAppInstance.tripsCost(peakOffPeakRadio.value);
        singleTripPrice.innerHTML = busTravelAppInstance.getSingleTripCost();

        // setting values in the local storage
        localStorage.setItem('singleTripCost', singleTripPrice.innerHTML);
        localStorage.setItem('singleTrips', singleTripsNum.innerHTML);
    }
});
