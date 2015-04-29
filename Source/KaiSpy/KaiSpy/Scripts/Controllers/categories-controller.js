function CategoryController() {
    this.CategoriesModel = new AjaxCategoriesModel();
    this.CategoriesView = new CategoriesView();
    this.DealsView = new DealsView();
}

CategoryController.prototype.ShowCategoryCheckboxes = function() {
    var deals = this.CategoriesModel.GetAllCategories();
    this.CategoriesView.CreateCategoryCheckBoxes(deals);
}

CategoryController.prototype.ShowSelectedCategory = function (e) {
    var element = e.target;
    startloadingImage();
    var deals;
    if ($(e.currentTarget).is(":checked")) {
        deals = this.CategoriesModel.GetDealsFromCategoryCheckbox(element.value);
        this.DealsView.AddMarkerForEachDeal(deals);
    } else {
        deals = this.CategoriesModel.GetDealsFromCategoryUnCheckbox(element.value);
        this.DealsView.RemoveMarkerForEachDeal(deals);
    }
}