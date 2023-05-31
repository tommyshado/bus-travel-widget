describe('The Bus Travel App functionality unit testing', function() {
    it('should return 0 when there are no number of points', function() {
        const busTravel = BusTravelApp();
        busTravel.setAmountOfPoints(0);
        assert.equal(0, busTravel.getAmountOfPoints());
    });
})