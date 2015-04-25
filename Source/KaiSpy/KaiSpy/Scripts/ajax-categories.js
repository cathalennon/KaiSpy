var BaseURI = "http://kaispy.azurewebsites.net/";

    function GetCategory(keyword) {
        $.get({
            url: BaseURI + "api/categories",
            content: { "keyword": keyword },
            datatype: "json",
            success: function (response) {
                console.log(response);
                LoopThroughJSON(response);
            },
            error: function(response) {
                console.log(response);
            }
        });
    }  
