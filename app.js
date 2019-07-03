var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=AURIva3W9i7nNcn9aJo6G5jme8AxjZqn";




$.ajax({
    url: queryURL,
    method: "GET"

}).then(function(data){
    console.log(data);
})


