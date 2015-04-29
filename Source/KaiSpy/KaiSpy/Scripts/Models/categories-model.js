function AjaxCategoriesModel() {

    this.BaseURI = "/api/categories";

}

AjaxCategoriesModel.prototype.GetAllCategories = function () {
    var result;
    $.ajax({
        type: "GET",
        url: this.BaseURI,
        datatype: "Json",
        success: function(response) {
            result = response;
        },
        error: function(response) {
            alert(response);
        },
        async: false
    });
    return result;
}

AjaxCategoriesModel.prototype.GetDealsFromCategoryCheckbox = function (keyword) {
    var result;
    $.ajax({
        type: "GET",
        url: this.BaseURI + '/' + keyword,
        datatype: "json",
        success: function (response) {
            result = response.Deals;
        },
        error: function (response) {
            alert(response);
        },
        async: false
    });
    return result;
}

AjaxCategoriesModel.prototype.GetDealsFromCategoryUnCheckbox = function (keyword) {
    var result;
    $.ajax({
        type: "GET",
        url: this.BaseURI + "/" + keyword,
        datatype: "json",
        success: function (response) {
            result = response.Deals;
        },
        error: function (response) {
            alert(response);
        },
        async: false
    });
    return result;
}