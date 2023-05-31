describe('The Bus Travel App functionality unit testing', function() {
    describe('single trips', function() {
        it('should return 0 when there are no number of points for a single trip', function() {
            const busTravel = BusTravelApp();
            busTravel.pointsOfTrips(0);
            assert.equal(0, busTravel.getSingleTripPoints());
        });
    
        it('should return 1 when there is 1 number of point for a single trip', function() {
            const busTravel = BusTravelApp();
            busTravel.pointsOfTrips(1, 'khayeltsha');
            assert.equal(1, busTravel.getSingleTripPoints());
        });
    
        it('should return 1 when there is 1 number of point for a single trip', function() {
            const busTravel = BusTravelApp();
            busTravel.pointsOfTrips(1, 'dunoon');
            assert.equal(1, busTravel.getSingleTripPoints());
        });
    
        it('should be able to calculate the single trip cost for a start location when it"s the normal time', function() {
            const busTravel = BusTravelApp();
            busTravel.pointsOfTrips(1, 'khayelitsha');
            busTravel.tripsCost();
            assert.equal(40, busTravel.getSingleTripCost());
        });
    
        it('should be able to calculate the single trip cost for a start location when it"s not normal time', function() {
            const busTravel = BusTravelApp();
            busTravel.pointsOfTrips(1, 'khayelitsha');
            busTravel.tripsCost(true);
            assert.equal(90, busTravel.getSingleTripCost());
        });
    
        it('should be able to calculate the single trip cost for a start location when it"s not normal time', function() {
            const busTravel = BusTravelApp();
            busTravel.pointsOfTrips(1, 'mitchells plain');
            busTravel.tripsCost(true);
            assert.equal(67.5, busTravel.getSingleTripCost());
        });
    });
    
    describe('return trips', function() {
        it('should be able to return the return trips when the trip is more than one and when the check box for return trip is checked', function() {
            const busTravel = BusTravelApp();
            busTravel.pointsOfTrips(2, 'khayelitsha', 'check');
            assert.equal(2, busTravel.getReturnTripsPoints());
        });

        it('should be able to return the return trips when the trip is more than one and when the check box for return trip is checked', function() {
            const busTravel = BusTravelApp();
            busTravel.pointsOfTrips(6, 'dunoon', 'check');
            assert.equal(6, busTravel.getReturnTripsPoints());
        });

        it('should be to calculate the return trip amount when it"s not the normal time', function() {
            const busTravel = BusTravelApp();
            busTravel.pointsOfTrips(2, 'khayelitsha', 'check');
            busTravel.tripsCost(true);
            assert.equal(180, busTravel.getReturnTripCost());
        });

        it('should be to calculate the return trip amount when it"s the normal time', function() {
            const busTravel = BusTravelApp();
            busTravel.pointsOfTrips(2, 'khayelitsha', 'check');
            busTravel.tripsCost();
            assert.equal(80, busTravel.getReturnTripCost());
        });
    });
})