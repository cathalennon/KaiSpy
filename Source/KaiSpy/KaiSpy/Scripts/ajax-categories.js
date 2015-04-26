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
<<<<<<< HEAD
        console.log(category.Namespace, category.Id);
        $('#foodtype').append('<input class="category" type="checkbox" value="' + category.Name + '"><label>' + category.Name + '</label>');
=======
        $('#foodtype').append("<input type='checkbox' value=" + category.Name + "><label>" + category.Name + "</label>");
>>>>>>> development
    }
}

function GetDealsFromCategoryCheckbox(keyword) {
    $.ajax({
        type: "GET",
        url: BaseURI + "categories/" + keyword,
        datatype: "Json",
<<<<<<< HEAD
        content: { "keyword": keyword },
        success: function (response) {
=======
        success: function(response) {
>>>>>>> development
            console.log(response);
            LoopThroughJSON(response);
        },
        error: function(response) {
            alert(response);
        }
    });
<<<<<<< HEAD
}

function checkboxListener() {
        if ($(this).is(":checked")) {
            alert('checked ' + this.value);
             GetDealsFromCategoryCheckbox(this.value);
        } else {
            alert('unchecked ' + this.value);
        }
=======
>>>>>>> development
}

