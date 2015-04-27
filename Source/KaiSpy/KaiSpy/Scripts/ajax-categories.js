var BaseURI = "http://localhost:59080/api/";

function GetAllCategories() {
    $.ajax({
        type: "GET",
        url: BaseURI + "categories",
        datatype:"Json",
        success: function (response) {
            console.log(response);
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
        $('#foodtype').append("<input type='checkbox' value=" + category.Name + "><label>" + category.Name + "</label>");
    }
}

function GetDealsFromCategoryCheckbox(keyword) {
    $.ajax({
        type: "GET",
        url: "http://localhost:59080/api/categories/" + keyword,
        datatype: "json",
        content: { "keyword": keyword },
        success: function(response) {
            LoopThroughJSON(response.Deals);
            console.log(response.Deals);
        },
        error: function(response) {
            alert(response);
        }
    });

}

function checkboxListener() {
        if ($(this).is(":checked")) {
            alert('checked ' + this.value);
             GetDealsFromCategoryCheckbox(this.value);
        } else {
            alert('unchecked ' + this.value);
        }

}

