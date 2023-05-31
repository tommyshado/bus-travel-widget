// for the Bus Travel Widget : 

// I am required to create the bus travel widget, that will calculate the cost price for a single trip from a desired destionation. 
// Destinations have different cost prices:
    //  Khayelitsha :       R40
    // Dunoon :             R25
    // Mitchells Plain :    R30

// there is also a peak hour increase which is charged at 25% per destination.

// I am also required to calculate the total number of trips a client an take based on the number of points provided and everytime she travels the total number of trips get decremented.
// also judging from the total number of trips available we should be able to determine whether she could take a return trip or not
// the widget should should number of return trips she can make 

// I am also required to calculate and show the cost per return trip.


function BusTravelApp(singleTrip, singleTripCostVar, returnTripsPointsVar) {
    let singleTripsPoints = singleTrip || 0;
    // create a variable for the location
    let startLocation = '';
    // create a variable for the cost of a single trip
    let singleTripAmount =  singleTripCostVar || 0;

    // variables for return trips
    let returnTripPoints = returnTripsPointsVar || 0;
    let returnTripAmount = 0;

    function pointsOfTrips(clientPoints, location, returnCheckBox) {
        let points = Number(clientPoints);
        // if in the user the client selects location in the dropdown
        if (location) {
            // check if the points is equal to 1, since a single trip is usually one trip
            if (points === 1) {
                // add one to the singleTripsPoints variable
                singleTripsPoints = points;
                // reassign the startLocation with the current location
                startLocation = location;

                // because the points may be 2 which is a return trip
            } else if (returnCheckBox && points > 1) {
                returnTripPoints = points;
                startLocation = location;
            }
        }
    }

    function tripsCost(offPeak) {
        // set the single trip amount to zero for the first time
        singleTripAmount = 0;
        returnTripAmount = 0;
        // set the location to lower case
        let lowerCaseLocation = startLocation.toLowerCase();
        // check if the global variable `location` is equal to Khayelitsha without offPeak time travel 
        if (lowerCaseLocation === 'khayelitsha') {
            // add the cost of a single trip
            singleTripAmount = 40;
            returnTripAmount = singleTripAmount;
        }

        if (lowerCaseLocation === 'khayelitsha' && offPeak) {
            // when the time is not normal bus time add 25% to the amount
            singleTripAmount += (40 * 25 / 100) + 40;
            returnTripAmount = singleTripAmount * returnTripPoints;
        }

        if (lowerCaseLocation === 'dunoon') {
            singleTripAmount = 25;
            returnTripAmount = singleTripAmount;
        }

        if (lowerCaseLocation === 'dunoon' && offPeak) {
            singleTripAmount += (25 * 25 / 100) + 25;
            returnTripAmount = singleTripAmount * returnTripPoints;
        }

        if (lowerCaseLocation === 'mitchells plain') {
            singleTripAmount = 30;
            returnTripAmount = singleTripAmount;
        }

        if (lowerCaseLocation === 'mitchells plain' && offPeak) {
            singleTripAmount += (30 * 25 / 100) + 30;
            returnTripAmount = singleTripAmount * returnTripPoints;
        }
    }


    
    function getSingleTripPoints() {
        return singleTripsPoints;
    }

    function getSingleTripCost() {
        return singleTripAmount;
    }

    function getReturnTripsPoints() {
        return returnTripPoints;
    }

    function getReturnTripCost() {
        return returnTripAmount;
    }

    return {
        pointsOfTrips,
        getSingleTripPoints,
        tripsCost,
        getSingleTripCost,
        getReturnTripsPoints,
        getReturnTripCost
    }
}