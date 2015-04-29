///<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
/// <reference path="~../../../KaiSpy/Scripts/KaiSpyApp.js"/>


describe("Display Circle Radius", function () {
    it("Displays Radius in KM", function () {
        var value = 4;
        DisplaySearchRadiusOnPage(value);
        var test = document.getElementById('search-radius').text();
        expect(test).toEqual(4 + "km");
     });
});

