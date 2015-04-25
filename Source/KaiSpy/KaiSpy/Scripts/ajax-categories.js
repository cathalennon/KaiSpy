var BaseURI = "http://localhost:59080/";

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
