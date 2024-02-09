console.log("Hello World");

//popup function, Rahmatullah working on it
function openPopup() {
  document.getElementById("overlay").style.display = "flex";
}

function closePopup() {
  document.getElementById("overlay").style.display = "none";
}

// typing effect for intro card
var i = 0;
var txt = "I hope you're ready for YOUR NEXT WATCH!";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("intro").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

onload = typeWriter();

// This .on("click") function will trigger the Fetch Call
$("#find-movie").on("click", function (event) {
  //empty previous movie
  $("#movie-view").empty();

  $(".front").remove();
  // changeWebsite()

  // Preventing the submit button from trying to submit the form
  // We're optionally using a form so the user may hit Enter to search instead of clicking the button
  event.preventDefault();

  // Here we grab the text from the input box
  var movie = $("#movie-input").val();

  // Here we construct our URL
  var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(queryURL);
      console.log(data);

      var movieView = $("#movie-view");

      $("#movie-view").append("<h2>" + data.Title + "</h2>");
      $("#movie-view").append(
        '<img class = "logo2" src="./20240130_215001_0000_480.png" alt="Your Next Watch Company Logo">'
      );
      $("#movie-view").append(
        "<img height=300 width=200 src=" +
          data.Poster +
          " alt=" +
          data.Title +
          ">"
      );
      $("#movie-view").append("<p>Year: " + data.Year + "</p>");
      $("#movie-view").append("<p>Rated: " + data.Rated + "</p>");
      $("#movie-view").append("<p>IMDB Rating: " + data.imdbRating + "</p>");
      $("#movie-view").append("<p>Country: " + data.Country + "</p>");
      $("#movie-view").append("<p>Language: " + data.Language + "</p>");
      $("#movie-view").append("<p>Runtime: " + data.Runtime + "</p>");
      $("#movie-view").append("<p>Plot: " + data.Plot + "</p>");
      $("#movie-view").append("<p>Actors: " + data.Actors + "</p>");
      $("#movie-view").append("<p>Director: " + data.Director + "</p>");

      // $(".logo2").css("width", "px");
      $(".logo2").css("margin-left", "900px");
      $(".logo2").css("margin-top", "0px");
      $(".logo2").css("width", "100px");
      $(".logo2").css("display", "block");
      $(".logo2").css("margin-bottom", "-100px");
      $(".logo2").css("border-radius", "20px");

      movieView.css("display", "block");
      movieView.css("width", "auto");
      movieView.css("border-radius", "20px");
      movieView.css(
        "box-shadow",
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
      );
      movieView.css("padding", "20px");
      movieView.css("background-color", "grey");
    });

  fetch(
    "https://api.spotify.com/v1/search?q=" +
      movie +
      "&type=playlist&limit=3&include_external=audio",
    {
      method: "GET",
      headers: {
        // 'Authorization': `Bearer ${"BQA1DrkhV6zwIkiC79R2LmlhfWrysnzUQFZpcKldjdIOGOEbQhmujjqroEFaaGnFmzNSnMCt6dxFQOj1AFLMR1FGXDOXI3jE-4h7dNSgBEF9jo18720"}`,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Process the API response as needed
      // Image
      console.log(data.playlists.items[0].images[0].url);
      $("#spotifyInfo").append(
        "<img height=150 width=150 src=" +
          data.playlists.items[0].images[0].url +
          " alt=" +
          data.playlists.items[0].name +
          ">"
      );
      // Name
      console.log(data.playlists.items[0].name);
      $("#spotifyInfo").append(
        "<p>Playlist Name: " + data.playlists.items[0].name + "</p>"
      );
      // link
      console.log(data.playlists.items[0].external_urls.spotify);
      $("#spotifyInfo").append(`<i class="fa-brands fa-spotify"></i>`);
      $("#spotifyInfo").append(
        "<a target='_blank' href=" +
          data.playlists.items[0].external_urls.spotify +
          "> Spotify Playlist Link🔗</a>"
      );

      $("#spotifyInfo").css("display", "block");
      $("#spotifyInfo").css("width", "auto");
      $("#spotifyInfo").css("border-radius", "20px");
      $("#spotifyInfo").css(
        "box-shadow",
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
      );
      $("#spotifyInfo").css("padding", "20px");
      $("#spotifyInfo").css("background-color", "#023020");
      // $("#spotifyInfo").css("font-size", "30px");
    })
    .catch((error) => console.error("Error:", error));
});
