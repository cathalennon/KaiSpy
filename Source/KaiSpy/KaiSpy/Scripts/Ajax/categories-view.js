function CategoriesView() {

}
//done
CategoriesView.prototype.CreateCategoryCheckBoxes = function (response) {
    for (var i = 0; i < response.length; i++) {
        var category = response[i];
        $('#foodtype').append("<div class='category-checkbox'><input type='checkbox' value='" + category.Name + "' checked='true'><label>" + category.Name + "</label><div>");
    }
}
//done
CategoriesView.prototype.AddMarkerForEachDeal = function(deals) {
    for (var i = 0; i < deals.length; i++) {
        var d = deals[i];
        var deal = {
            name: d.BusinessName,
            latitude: d.Lat,
            longitude: d.Long,
            description: d.Description,
            day: d.Day,
            address: d.Address,
            phone: d.PhoneNumber
        }
        addMarker(deal);
    }
};
//done
CategoriesView.prototype.RemoveMarkerForEachDeal = function(deals) {
    for (var j = 0; j < deals.length; j++) {

        for (var i = 0; i < markers.length; i++) {
            if (markers[i].title === deals[j].BusinessName) {
                markers[i].setMap(null);
            }
        }
    }
    stopLoadingImage();
};