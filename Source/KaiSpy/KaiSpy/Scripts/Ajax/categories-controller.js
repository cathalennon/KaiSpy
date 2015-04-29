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
//done
CategoryController.prototype.ShowSelectedCategory = function (e) {
    var element = e.target;
    startloadingImage();
    var deals;
    if ($(e.currentTarget).is(":checked")) {
        deals = this.CategoriesModel.GetDealsFromCategoryCheckbox(element.value);
        this.CategoriesView.AddMarkerForEachDeal(deals);
    } else {
        deals = this.CategoriesModel.GetDealsFromCategoryUnCheckbox(element.value);
        this.CategoriesView.RemoveMarkerForEachDeal(deals);
    }
}