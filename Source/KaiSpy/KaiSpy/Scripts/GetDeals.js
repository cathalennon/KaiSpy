// BA commented-out code. Remove it.
/*var ApiRequest = function() {
    this.uri = 'http://kaispy.azurewebsites.net/';
}

ApiRequest.prototype.getAllDeals = function()*/
function getAllDeals() {
    $.ajax({
        type: 'GET',
        url: 'http://kaispy.azurewebsites.net/api/deals',
        datatype: 'json'
    }).done(function (data) {
        LoopThroughJSON(data);
    }).fail(function(error) {
        console.log('cannot get deals from server. Error: ' + error);
    });
};

// BA I can see that this is looping trhough the json, but what else is it doing? Is LoopThroughJSON a good name?
function LoopThroughJSON(response) {
    console.log(response);
    for (var i = 0; i < response.length; i++) {
        var d = response[i];
        var deal = {
            name: d.BusinessName,
            latitude: d.Lat,
            longitude: d.Long,
            description: d.Description,
            day: d.Day,
            address: d.Address,
            phone: d.PhoneNumber
        }
        addMarker(deal); // BA you appear to have a lot of global methods. This probably isn't great style.
    }
}