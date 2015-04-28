var BaseURI = "http://localhost:59080/api/categories";

function GetAllCategories() {
    $.ajax({
        type: "GET",
        url: BaseURI,
        datatype:"Json",
        success: function (response) {
           CreateCategoryCheckBoxes(response);
        },
        error: function (response) {
            alert(response);
        }
    });
}

function CreateCategoryCheckBoxes(response) {
    for (var i = 0; i < response.length; i++) {
        var category = response[i];
    $('#foodtype').append("<div class='category-checkbox'><input type='checkbox' value='" + category.Name + "' checked='true'><label>" + category.Name + "</label><div>");
    }
}

function GetDealsFromCategoryCheckbox(keyword) {
    $.ajax({
        type: "GET",
        url: BaseURI + '/' + keyword,
        datatype: "json",
        success: function(response) {
            LoopThroughJSON(response.Deals);
       },
        error: function(response) {
            alert(response);
        }
    });

}

function GetDealsFromCategoryUnCheckbox(keyword) {
    $.ajax({
        type: "GET",
        url: "http://localhost:59080/api/categories/" + keyword,
        datatype: "json",
        success: function (response) {
            removeMarkers(response.Deals);
            },
        error: function (response) {
            alert(response);
        }
    });

}

function checkboxListener() {
    if ($(this).is(":checked")) {
        hideGoogleMap();
        GetDealsFromCategoryCheckbox(this.value);
    } else {
        hideGoogleMap();
        GetDealsFromCategoryUnCheckbox(this.value);
    }
  
}

