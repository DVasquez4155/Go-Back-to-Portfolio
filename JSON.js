//Example of how this API can be used
var weather = new getResponse("https://api.openweathermap.org/data/2.5/weather", "?appid=01ca9f9b934a40c31918c2ee0f5d52e4", "&q=San+Jose")
var cat = new getResponse("https://aws.random.cat/meow", "", "")
weather.done(
    function (response){
        console.log(response)
    }
)
cat.done(
    function (response){
        console.log(response)
    }
)
//Response
function getResponse(url, apiKey, query) {
    this.url = url;
    this.apiKey = apiKey;
    this.query = query;
    
    this.queryURL = function() {return this.url + this.apiKey + this.query;};
    var ajax =  $.ajax({
        url: this.queryURL(),
        method: "GET"
    });
    return ajax
  }