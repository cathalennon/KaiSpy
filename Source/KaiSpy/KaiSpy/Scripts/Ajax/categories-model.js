function AjaxCategoriesModel() {

    this.BaseURI = "http://localhost:59080/api/categories";
    this.View = new CategoriesView();

}

AjaxCategoriesModel.prototype.GetAllCategories = function () {
    view = new CategoriesView();
    $.ajax({
        type: "GET",
        url: this.BaseURI,
        datatype: "Json",
        success: function (response) {
            view.CreateCategoryCheckBoxes(response);
        },
        error: function (response) {
            alert(response);
        }
    });
}

AjaxCategoriesModel.prototype.GetDealsFromCategoryCheckbox = function (keyword) {
    $.ajax({
        type: "GET",
        url: this.BaseURI + '/' + keyword,
        datatype: "json",
        success: function (response) {
            LoopThroughJSON(response.Deals);
        },
        error: function (response) {
            alert(response);
        }
    });
}

AjaxCategoriesModel.prototype.GetDealsFromCategoryUnCheckbox = function (keyword) {
    $.ajax({
        type: "GET",
        url: this.BaseURI + "/" + keyword,
        datatype: "json",
        success: function (response) {
            removeMarkers(response.Deals);
        },
        error: function (response) {
            alert(response);
        }
    });
}