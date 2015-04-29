$('document').ready(function () {
    LoadHomePage();
});

function LoadHomePage() {
    RenderInitalPage();
    LoadEventListeners();
}

function RenderInitalPage() {
     PlaceLoadingImage();
    initialize();
    getAllDeals();
}

function LoadEventListeners() {
    var categoryController = new CategoryController();
    categoryController.ShowCategoryCheckboxes(); //done
    $('#foodtype').on('click', 'input', categoryController.ShowSelectedCategory.bind(categoryController));
    $('#remove-all-pins').on('click', RemoveAllPinsCurrentlyOnMap);
    $('#add-all-pins').on('click', ResetAllPinsToShowOnMap);
}

function showDetails(deal) {
    $('#details').empty();
    var dets = "<p> Day: " + deal.day + "</p><p>" + deal.description + "</p>";
    var businessInfo = '<div id="businessInfo"><p> Phone: ' + deal.phone + '</p><p> Address: ' + deal.address + '</p></div>';
    $('#details').append("<h3>" + deal.name + "<h3>" + dets + businessInfo);
    $('#details').show();
}

function ResetAllPinsToShowOnMap() {
    startloadingImage();
    getAllDeals();
    $('#foodtype input').prop('checked', true);
    circle.set('radius', parseInt(3000));
    $('#search-radius-slider').prop('value', 3);
    $('#search-radius').text("3 km");
}

function PlaceLoadingImage() {
    $('#map-canvas').append('<img id="loading-image" src="/Content/imgs/pizza.png">');
}

$(function () {
    var $elie = $("#loading-image"), degree = 0;
    function rotate() {

        $elie.css({ WebkitTransform: 'rotate(' + degree + 'deg)' });
        $elie.css({ '-moz-transform': 'rotate(' + degree + 'deg)' });
        setTimeout(function () {
            ++degree; rotate();
        }, 5);
    }
    rotate();
});


function SetCircleRadiusBySlider(value) {
    circle.set('radius', parseInt(value * 1000));
    CheckMarkerIsInRadius();
    DisplaySearchRadiusOnPage(value);
}

function DisplaySearchRadiusOnPage(value) {
    var valueToDisplay = value + " km";
    $('#search-radius').text(valueToDisplay);
}

