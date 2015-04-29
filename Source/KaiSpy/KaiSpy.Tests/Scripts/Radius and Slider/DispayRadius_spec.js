///<reference path="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"/>
///<reference path="~../../../KaiSpy/Scripts/KaiSpyApp.js"/>


describe("Display Circle Radius", function () {
    it("to equal 4km.", function (){
        var FakerElement = jasmine.createSpyObj('element', ["text"])
        $ = function() {return(FakerElement);}

        DisplaySearchRadiusOnPage(4);
        expect(FakerElement.text).toHaveBeenCalledWith('4 km');
     });
}); 



//describe("SetCircleRadiusBySlider", function() {
//    it("Calls Methods and sets radius size", function() {
//        expect(()) ? ()
//
//    });
//});



