function CategoriesView() {

}
//done
CategoriesView.prototype.CreateCategoryCheckBoxes = function (response) {
    for (var i = 0; i < response.length; i++) {
        var category = response[i];
        $('#foodtype').append("<div class='category-checkbox'><input type='checkbox' value='" + category.Name + "' checked='true'><label>" + category.Name + "</label><div>");
    }
}