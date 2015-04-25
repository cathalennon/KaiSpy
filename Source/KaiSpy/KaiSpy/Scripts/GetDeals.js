var ApiRequest = function() {
    this.uri = 'http://localhost:59080/api';
}

ApiRequest.prototype.getAllDeals = function() {
    $.ajax({
        type: 'GET',
        url: this.uri + 'api/Deals',
        datatype: 'json'
    }).done(function(data) {
        LoopThroughJSON(data);
    }).fail(function(error) {
        console.log('cannot get deals from server. Error: ' + error);
    });
}