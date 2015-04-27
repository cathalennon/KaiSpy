$('document').ready(function() {
    initialize();
    getAllDeals();
    GetAllCategories();
    $('#foodtype').on('click', 'input', checkboxListener);
    $('#remove-all-pins').on('click', RemoveAllPinsCurrentlyOnMap);
    $('#add-all-pins').on('click', ResetAllPinsToShowOnMap);
});


function showDetails(deal) {
    $('#details').empty();
    var dets = "<p> Day: " + deal.day + "</p><p>" + deal.description + "</p>";
    var businessInfo = '<div id="businessInfo"><p> Phone: ' + deal.phone + '</p><p> Address: ' + deal.address + '</p></div>';
    $('#details').append("<h3>" + deal.name + "<h3>" + dets + businessInfo);
    $('#details').show();
}

function ResetAllPinsToShowOnMap() {
    getAllDeals();
    $('#foodtype input').prop('checked', true);
}
