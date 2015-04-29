function CategoryController() {
    this.CategoriesModel = new AjaxCategoriesModel();
    this.CategoriesView = new CategoriesView();
}
//done
CategoryController.prototype.ShowCategoryCheckboxes = function() {
    var deals = this.CategoriesModel.GetAllCategories();
    console.log('this category model is : ' + this.CategoriesModel);
    this.CategoriesView.CreateCategoryCheckBoxes(deals);
}

CategoryController.prototype.ShowSelectedCategory = function (e) {
    var element = e.target;
    startloadingImage();
    if ($(e.currentTarget).is(":checked")) {
        this.CategoriesModel.GetDealsFromCategoryCheckbox(element.value);
    } else {
        this.CategoriesModel.GetDealsFromCategoryUnCheckbox(element.value);
    }
}