var map;
var markers = [];
var circle;
var UserPin;

function initialize() {
    $('#details').hide();
    var mapOptions = {
        zoom: 13
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    // Try HTML5 geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            UserPin = CreateUserPin(map, pos);
            circle = CreateCircle(map);
            circle.bindTo('center', UserPin, 'position');

            map.setCenter(pos);
        }, function () {
            handleNoGeolocation(true);
        });
    } else {
        // Browser doesn't support Geolocation
        handleNoGeolocation(false);
    }
}
pin = CreateUserPin(map, top, "vundermap")

function CreateUserPin(map, position) {
    return new google.maps.Marker({
        map: map,
        position: position,
        title: "You Hungry nom nom nom"
    });
}



function CreateCircle(map) {
    return new google.maps.Circle({
        map: map,
        radius: 3000,    // == meters
        fillColor: '#B1FF40',
        fillOpacity: 0.2,
        strokeOpacity: 0.2,
        strokeWeight: 0.8
    });
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

    new google.maps.InfoWindow(options);
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

    markers.push(marker);

    google.maps.event.addListener(marker, "click", function () {
        infowindow.open(map, marker);
        showDetails(deal);
    });
    stopLoadingImage();
}

function RemoveAllPinsCurrentlyOnMap() {
    startloadingImage();
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
    $('#foodtype input').prop('checked', false);
    stopLoadingImage();
}



function CheckMarkerIsInRadius() {

    for (var i = 0; i < markers.length; i++) {
        var marker = markers[i];
        var distance = google.maps.geometry.spherical.computeDistanceBetween(marker.position, UserPin.position);
        if (distance > circle.radius) {
            marker.setVisible(false);
        }
        else {
            marker.setVisible(true);
        }
    }
}

function SetCircleRadiusBySlider(value) {
    circle.set('radius', parseInt(value * 1000));
    CheckMarkerIsInRadius();
    DisplaySearchRadiusOnPage(value);
}

function DisplaySearchRadiusOnPage(value) {
    var valueToDisplay = value + " km";
    $('#search-radius').text(valueToDisplay);
}

