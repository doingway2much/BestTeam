$.ajax({
    url: "https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=AURIva3W9i7nNcn9aJo6G5jme8AxjZqn",
    method: "GET"

}).then(function(data){
    console.log(data);
})