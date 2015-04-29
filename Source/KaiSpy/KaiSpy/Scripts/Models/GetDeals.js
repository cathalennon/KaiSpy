/*var ApiRequest = function() {
    this.uri = 'http://kaispy.azurewebsites.net/';
}

ApiRequest.prototype.getAllDeals = function()*/
function getAllDeals() {
   
};

function LoopThroughJSON(response) {
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
        addMarker(deal);
    }
};