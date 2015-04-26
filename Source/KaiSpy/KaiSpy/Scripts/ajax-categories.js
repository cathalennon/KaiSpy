var BaseURI = "http://localhost:59080/api/";

function GetAllCategories() {
    $.ajax({
        type: "GET",
        url: BaseURI + "values",
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
        console.log(category.Namespace, category.Id);
        $('#foodtype').append("<input type='checkbox' value=" + category.Namespace + "><label>" + category.Name + "</label>");
    }
}


