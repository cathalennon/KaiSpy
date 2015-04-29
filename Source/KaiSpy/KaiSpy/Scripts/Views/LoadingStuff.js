function LoadHomePage() {
    RenderInitalPage();
    LoadCategoriesEventListeners();
    LoadDealsEventListeners();
}

function RenderInitalPage() {
    PlaceLoadingImage();
    initialize();
}

function LoadCategoriesEventListeners() {
    var categoryController = new CategoryController();
    categoryController.ShowCategoryCheckboxes(); 
    $('#foodtype').on('click', 'input', categoryController.ShowSelectedCategory.bind(categoryController));
}

function LoadDealsEventListeners() {
    var dealController = new DealsController();
    $('#remove-all-pins').on('click', RemoveAllPinsCurrentlyOnMap);
    $('#add-all-pins').on('click', dealController.ShowAllDeals.bind(dealController));
    $('#add-all-pins').trigger('click');

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

function showDetails(deal) {
    $('#details').empty();
    var dets = "<p> Day: " + deal.day + "</p><p>" + deal.description + "</p>";
    var businessInfo = '<div id="businessInfo"><p> Phone: ' + deal.phone + '</p><p> Address: ' + deal.address + '</p></div>';
    $('#details').append("<h3>" + deal.name + "<h3>" + dets + businessInfo);
    $('#details').show();
}

function startloadingImage() {
    $('#loading-image').show();
}

function stopLoadingImage() {
    $('#loading-image').hide();
}

