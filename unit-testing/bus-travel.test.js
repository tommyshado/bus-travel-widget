describe('The Bus Travel App functionality unit testing', function() {
    it('should return 0 when there are no number of points for a single trip', function() {
        const busTravel = BusTravelApp();
        busTravel.amountOfSingleTrips(0);
        assert.equal(0, busTravel.getSingleTripAmount());
    });

    it('should return 10 when there are 10 number of points for a single trip', function() {
        const busTravel = BusTravelApp();
        busTravel.amountOfSingleTrips(10);
        assert.equal(10, busTravel.getSingleTripAmount());
    });
})