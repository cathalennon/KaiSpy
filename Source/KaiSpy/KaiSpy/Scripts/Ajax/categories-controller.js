function CategoryController() {
    this.CategoriesModel = new AjaxCategoriesModel();
    this.CategoriesView = new CategoriesView();
}
//done
CategoryController.prototype.ShowCategoryCheckboxes = function() {
    var deals = this.CategoriesModel.GetAllCategories();
    this.CategoriesView.CreateCategoryCheckBoxes(deals);
}