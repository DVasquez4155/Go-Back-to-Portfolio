//Example of how this API can be used

// var weatherOptions = {
//     url : "https://api.openweathermap.org/data/2.5/weather",
//     api : "?appid=01ca9f9b934a40c31918c2ee0f5d52e4",
//     query : "&q=San+Jose",
//     cors : false,
//     result : function (response) {
//         console.log(response);
//     }
// }
// var weather = new JSON(weatherOptions);

// var cat = new JSON(
//     {
//         url : "https://aws.random.cat/meow",
//         result : function (response) {
//             console.log(response.file);
//         }
//     }
// );

//Response
function JSON(options) {
    //Check to see if a variable is undefined
    function checkIfDefined (variable) {
        if (variable == undefined) {
            return "";
        }
        else {
            return variable
        };
    }
    //Set variables
    this.url = checkIfDefined(options.url);
    this.api = checkIfDefined(options.api);
    this.query = checkIfDefined(options.query);
    this.headers = checkIfDefined(options.headers)
    if (options.cors == undefined) {
        this.cors = false;
    }
    else {
        this.cors = options.cors;
    }
    if (options.method == undefined) {
        this.method = "GET";
    }
    else {
        this.method = options.method;
    }
    //Check to see if user enabled cors
    var corsAnywhere = '';
    if (this.cors) {
        corsAnywhere = 'https://boiling-gorge-84466.herokuapp.com/';
    }
    this.queryURL = corsAnywhere + this.url + this.api + this.query;
    //Ajax call
    var ajax =  $.ajax({
        url: this.queryURL,
        method: this.method,
        crossDomain: true,
        headers: this.headers,
        dataType: "json"
    })
    .done(
        function (response) {
            options.result(response);
        }
    )
    .fail(
        function (response) {
            options.result(response);
            console.log(response)
            console.log(response.responseJSON)
        }
    );
    this.ajax = ajax;
}
