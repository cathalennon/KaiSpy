var BaseURI = "http://localhost:59080/";



    function LoopThroughJSON(response) {
        for (var i = 0; i < response.length; i++) {
            var d = response[i];

            var deal = {
                name: d.BusinessName,
                latitude: d.Lat,
                longitude: d.Long
            }
            addMarker(deal);
        }
    }


    function GetCategory(keyword) {
        $.get({
            url: BaseURI + "api/categories",
            content: { "keyword": keyword },
            datatype: "json",
            success: function (response) {
                console.log(response);
                LoopThroughJSON(resposnse);
            },
            error: function(response) {
                console.log(response);
            }
        });
    }  
