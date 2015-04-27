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

        $('#foodtype').append("<input type='checkbox' value=" + category.Name + " checked = 'true'><label>" + category.Name + "</label>");

        console.log(category.Name, category.Id);
        $('#foodtype').append("<input type='checkbox' value='" + category.Name + "'><label>" + category.Name + "</label>");

    }
}

function GetDealsFromCategoryCheckbox(keyword) {
    $.ajax({
        type: "GET",
        url: "http://localhost:59080/api/categories/" + keyword,
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
            console.log("data" + response.Deals);
        },
        error: function (response) {
            alert(response);
        }
    });

}

function checkboxListener() {
    if ($(this).is(":checked")) {
        console.log(this);
            alert('checked ' + this.value);
             GetDealsFromCategoryCheckbox(this.value);
    } else {
        GetDealsFromCategoryUnCheckbox(this.value);
        console.log(this.value);
        alert('unchecked ' + this.value);
        }
  
}

