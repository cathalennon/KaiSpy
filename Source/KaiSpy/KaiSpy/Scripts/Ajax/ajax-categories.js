function AjaxCategoriesModel() {

    this.BaseURI = "/api/categories";
    this.View = new AjaxCategoriesView();

}

AjaxCategoriesModel.prototype.GetAllCategories = function () {
    view = new AjaxCategoriesView();
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

AjaxCategoriesModel.prototype.GetDealsFromCategoryCheckbox = function(keyword) {
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

AjaxCategoriesModel.prototype.GetDealsFromCategoryUnCheckbox = function(keyword) {
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

//------------------------Categories View


function AjaxCategoriesView() {
    
}


AjaxCategoriesView.prototype.CreateCategoryCheckBoxes = function(response) {
    for (var i = 0; i < response.length; i++) {
        var category = response[i];
    $('#foodtype').append("<div class='category-checkbox'><input type='checkbox' value='" + category.Name + "' checked='true'><label>" + category.Name + "</label><div>");
    }
}


//-------------------------Not Sure about This One


function checkboxListener() {
    model = new AjaxCategoriesModel();
    if ($(this).is(":checked")) {
        hideGoogleMap();
        model.GetDealsFromCategoryCheckbox(this.value);
    } else {
        hideGoogleMap();
        model.GetDealsFromCategoryUnCheckbox(this.value);
    }
  
}

