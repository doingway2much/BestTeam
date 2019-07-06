var topic = "";
var startYear = "";
var endYear = "";
var count;
var queryURL;

$('#searchb').on('click', function() {
    topic = $('#term').val();
    count = parseInt($('#inputState').val());
    startYear = $('#firstyear').val();
    endYear = $('#lastyear').val();
    if (startYear === "" || endYear === "") {
        queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + topic + "&facet_fields=source&facet=true&api-key=AURIva3W9i7nNcn9aJo6G5jme8AxjZqn";
    } else {
        queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + topic + "q=obama&facet_fields=source&facet=true&begin_date=" + startYear + "0101&end_date=" + endYear + "1231&api-key=AURIva3W9i7nNcn9aJo6G5jme8AxjZqn";
    }

    $.ajax({
        url: queryURL,
        method: "GET"

    }).then(function(data) {
        console.log(data)
        for (i = 0; i < count; i++) {
            var newArticle = $('<div class="articles">');
            var newH = $('<a href="' + data.response.docs[i].web_url + '"><h3>' + data.response.docs[i].abstract + '</h3></a>');
            var newP = $('<p>');
            newP.text(data.response.docs[i].byline['original']);
            newArticle.append(newH).append(newP)
            $('#articles').prepend(newArticle);
        }

    })
})

$('#clear').on('click', function() {
    $('.articles').empty();


})