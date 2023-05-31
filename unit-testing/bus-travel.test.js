describe('The Bus Travel App functionality unit testing', function() {
    it('should return 0 when there are no number of points for a single trip', function() {
        const busTravel = BusTravelApp();
        busTravel.pointsOfSingleTrips(0);
        assert.equal(0, busTravel.getSingleTripPoints());
    });

    it('should return 1 when there is 1 number of point for a single trip', function() {
        const busTravel = BusTravelApp();
        busTravel.pointsOfSingleTrips(1, 'khayeltsha');
        assert.equal(1, busTravel.getSingleTripPoints());
    });

    it('should return 1 when there is 1 number of point for a single trip', function() {
        const busTravel = BusTravelApp();
        busTravel.pointsOfSingleTrips(1, 'dunoon');
        assert.equal(1, busTravel.getSingleTripPoints());
    });

    it('should be able to calculate the single trip cost for a start location when it"s the normal time', function() {
        const busTravel = BusTravelApp();
        busTravel.pointsOfSingleTrips(1, 'khayelitsha');
        busTravel.singleTripCost();
        assert.equal(40, busTravel.getSingleTripCost());
    });

    it('should be able to calculate the single trip cost for a start location when it"s not normal time', function() {
        const busTravel = BusTravelApp();
        busTravel.pointsOfSingleTrips(1, 'khayelitsha');
        busTravel.singleTripCost(true);
        assert.equal(90, busTravel.getSingleTripCost());
    });

    it('should be able to calculate the single trip cost for a start location when it"s not normal time', function() {
        const busTravel = BusTravelApp();
        busTravel.pointsOfSingleTrips(1, 'mitchells plain');
        busTravel.singleTripCost(true);
        assert.equal(67.5, busTravel.getSingleTripCost());
    });
})