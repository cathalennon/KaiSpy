﻿/*var ApiRequest = function() {
    this.uri = 'http://localhost:59080/api';
}

ApiRequest.prototype.getAllDeals = function()*/
function getAllDeals() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:59080/api/Deals',
        datatype: 'json'
    }).done(function (data) {
        LoopThroughJSON(data);
    }).fail(function(error) {
        console.log('cannot get deals from server. Error: ' + error);
    });
};

function LoopThroughJSON(response) {
    console.log(response);
    for (var i = 0; i < response.length; i++) {
        var d = response[i];
        var deal = {
            name: d.BusinessName,
            latitude: d.Lat,
            longitude: d.Long
        }
        addMarker(deal);
    }
}