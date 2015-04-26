$('document').ready(function() {
    initialize();
    getAllDeals();
    GetAllCategories(); // BA idiomatic javascript is in lowerCamelCase not UpperCamelCase
    $('#foodtype').on('click','input', checkboxListener);
    //GetAllCategories(); // BA commented out code - what's this still doing here?
    GetDealsFromCategoryCheckbox("pizza");
});
var map;

function initialize() {
    $('#details').hide();
    var mapOptions = {
        zoom: 18
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    // Try HTML5 geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = new google.maps.LatLng(position.coords.latitude,
                                             position.coords.longitude);

            var infowindow = new google.maps.Marker({
                map: map,
                position: pos,
                title: 'You Hungry nom nom nom'
            });

            map.setCenter(pos);
        }, function () {
            handleNoGeolocation(true);
        });
    } else {
        // Browser doesn't support Geolocation
        handleNoGeolocation(false);
    }
}

function handleNoGeolocation(errorFlag) {
    if (errorFlag) {
        var content = 'Error: The Geolocation service failed.'; // BA declare content once and assign in the if, rather than declaring twice
    } else {
        var content = 'Error: Your browser doesn\'t support geolocation.';
    }

    var options = {
        map: map,
        position: new google.maps.LatLng(60, 105),
        content: content
    };

    var infowindow = new google.maps.InfoWindow(options); // BA redundant variable
    map.setCenter(options.position);
}

function addMarker(deal) {
    var name = deal.name;
    var LatLong = new google.maps.LatLng(deal.latitude, deal.longitude);
    var infowindow = new google.maps.InfoWindow({
        content: '<div class="marker">' + '<h3>' + deal.name + '</h3> </div>' // BA mixed concerns here? Is this class doing model stuff and view stuff?
        });

    var marker = new google.maps.Marker({
        position: LatLong,
        map: map,
        title: name
    });
    google.maps.event.addListener(marker, "click", function () {
        infowindow.open(map, marker);
            showDetails(deal);
    });
    
}

// BA can this function be implemented using templating of some sort? Mustache? (I'm not a JS expert but I think there must be a better way than this).
function showDetails(deal) {
    $('#details').empty();
    var dets = "<p> Day: " + deal.day + "</p><p>" + deal.description + "</p>"; // BA "dets" is not a wonderful variable name. "details" is still pretty meaningless. WHAT are they the details of?
    var businessInfo = '<div id="businessInfo"><p> Phone: ' + deal.phone + '</p><p> Address: ' + deal.address + '</p></div>'; 
    $('#details').append("<h3>" + deal.name + "<h3>" + dets + businessInfo);
    $('#details').show();
}

