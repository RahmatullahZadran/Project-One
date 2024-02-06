var movieTrailer = "https://api.kinocheck.de/movies?tmdb_id=299534";

fetch(movieTrailer)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(movieTrailer);
        console.log(data);
    })

console.log("hello world");