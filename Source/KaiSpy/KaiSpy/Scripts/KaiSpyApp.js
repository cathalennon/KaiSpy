﻿$('document').ready(function() {
    initialize();
    getAllDeals();
});
/*var api = new ApiRequest();*/
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
        var content = 'Error: The Geolocation service failed.';
    } else {
        var content = 'Error: Your browser doesn\'t support geolocation.';
    }

    var options = {
        map: map,
        position: new google.maps.LatLng(60, 105),
        content: content
    };

    var infowindow = new google.maps.InfoWindow(options);
    map.setCenter(options.position);
}

function addMarker(deal) {
    var name = deal.name;
    var LatLong = new google.maps.LatLng(deal.latitude, deal.longitude);
    var infowindow = new google.maps.InfoWindow({
        content: '<div class="marker">' + '<h3>' + deal.name + '</h3> </div>'
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

function showDetails(deal) {
    $('#details').empty();
    var dets = "<p> Day: " + deal.day + "</p><p>" + deal.description + "</p>";
    var businessInfo = "<div><p> Phone: " + deal.phone + "</p><p> Address: " + deal.address + "</p></div>"; 
    $('#details').append("<h3>" + deal.name + "<h3>" + dets + businessInfo);
    $('#details').show();
}

