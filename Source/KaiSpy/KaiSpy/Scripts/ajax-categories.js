var BaseURI = "http://localhost:59080/api/";

function GetAllCategories() {
    $.ajax({
        type: "GET",
        url: BaseURI + "categories",
        datatype:"Json",
        success: function(response) {
            CreateCategoryCheckBoxes(response);
        },
        error: function (response) {
            console.log(response);
        }
    });
}

function CreateCategoryCheckBoxes(response) {
    for (var i = 0; i < response.length; i++) {
        var category = response[i];
        $('#foodtype').append("<input type='checkbox' value=" + category.Name + "><label>" + category.Name + "</label>");
    }
}

function GetDealsFromCategoryCheckbox(keyword) {
    $.ajax({
        type: "GET",
        url: BaseURI + "categories/" + keyword,
        datatype: "Json",
        success: function(response) {
            console.log(response);
        },
        error: function(response) {
            alert(response);
        }
    });
}

