function DealsController() {
    this.DealModel = new AjaxDealsModel();
    this.DealView = new DealsView();
}

DealsController.prototype.ShowAllDeals = function() {
    var deals = this.DealModel.GetAllDeals();
    this.DealView.AddMarkerForEachDeal(deals);
    $('#foodtype input').prop('checked', true);
    circle.set('radius', parseInt(3000));
    $('#search-radius-slider').prop('value', 3);
    $('#search-radius').text("3 km");
}
