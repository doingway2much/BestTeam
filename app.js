

var topic = "obama"
var startyear = "2017"
var endyear = "2017"
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + topic + "q=obama&facet_fields=source&facet=true&begin_date=" + startyear + "0101&end_date=" + endyear + "1231&api-key=AURIva3W9i7nNcn9aJo6G5jme8AxjZqn";
var count = 0;


$.ajax({
    url: queryURL,
    method: "GET"

}).then(function(data){
    

    for (i = 0; i < count; i++) {
        console.log(i);
        var newArticle = $('<div>');
        var newH = $('<h3>');
        newH.text(data.response.docs[i].abstract);
        var newP = $('<p>');
        newP.text(data.response.docs[i].byline['original']);
        newArticle.append(newH).append(newP)
        $('wherethearticleshouldgo').append(newArticle);
    
    }
    



})