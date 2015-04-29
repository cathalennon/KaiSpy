function AjaxDealsModel() {
    this.BaseURI = "/api/deals";
}

AjaxDealsModel.prototype.GetAllDeals = function () {
    var result;
    $.ajax({
        type: "GET",
        url: this.BaseURI,
        datatype: "Json",
        success: function (response) {
            result = response;
            console.log(response);
            console.log('getting all deals :' + result);
        },
        error: function (response) {
            alert(response);
        },
        async: false
    });
    return result;
}