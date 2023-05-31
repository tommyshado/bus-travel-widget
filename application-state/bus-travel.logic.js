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


function BusTravelApp() {
    let amountOfPointsAvailable = 0;
    function setAmountOfPoints(clientPoints) {
        amountOfPointsAvailable = clientPoints;
    }

    function getAmountOfPoints() {
        return amountOfPointsAvailable;
    }

    return {
        setAmountOfPoints,
        getAmountOfPoints
    }
}