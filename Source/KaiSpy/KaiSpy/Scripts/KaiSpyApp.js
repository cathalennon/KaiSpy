﻿$('document').ready(function () {
    var ajaxController = new AjaxControllers();

    initialize();
    getAllDeals();
    
    ajaxController.CategoriesModel.GetAllCategories();
    $('#foodtype').on('click', 'input', checkboxListener);
    $('#remove-all-pins').on('click', RemoveAllPinsCurrentlyOnMap);
    $('#add-all-pins').on('click', ResetAllPinsToShowOnMap);
    loadingImage();
    $('#loading-image').hide();
});

function AjaxControllers() {
    this.CategoriesModel = new AjaxCategoriesModel();
    this.CategoriesView = new AjaxCategoriesView();
}


function showDetails(deal) {
    $('#details').empty();
    var dets = "<p> Day: " + deal.day + "</p><p>" + deal.description + "</p>";
    var businessInfo = '<div id="businessInfo"><p> Phone: ' + deal.phone + '</p><p> Address: ' + deal.address + '</p></div>';
    $('#details').append("<h3>" + deal.name + "<h3>" + dets + businessInfo);
    $('#details').show();
}

function ResetAllPinsToShowOnMap() {
    hideGoogleMap();
    getAllDeals();
    $('#foodtype input').prop('checked', true);
}

function loadingImage() {
    $('#map-canvas').append('<img id="loading-image" src="/Content/imgs/pizza.png">');
}

$(function () {
    var $elie = $("#loading-image"), degree = 0;
    rotate();
    function rotate() {

        $elie.css({ WebkitTransform: 'rotate(' + degree + 'deg)' });
        $elie.css({ '-moz-transform': 'rotate(' + degree + 'deg)' });
        setTimeout(function () {
            ++degree; rotate();
        }, 5);
    }

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

