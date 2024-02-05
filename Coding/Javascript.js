console.log("Hello World");

//popup function, Rahmatullah working on it
function openPopup() {
    document.getElementById('overlay').style.display = 'flex';
  }

  function closePopup() {
    document.getElementById('overlay').style.display = 'none';
  }

  // typing effect for intro card
  var i = 0;
  var txt = "Movie fanatic?... Want to know more about the latest movies?... You're in the right place! This is...YOUR NEXT WATCH!";
  var speed = 50;

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("intro").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  onload = typeWriter()

// This .on("click") function will trigger the Fetch Call
$("#find-movie").on("click", function (event) {

  //empty previous movie
  // $("#movie-view").empty();

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
        "<img height=300 width=200 src=" + data.Poster + " alt=" + data.Title + ">"
      );
      $("#movie-view").append("<p>Year: " + data.Year + "</p>");
      $("#movie-view").append("<p>Rated: " + data.Rated + "</p>");
      $("#movie-view").append("<p>IMDB Rating: " + data.imdbRating + "</p>");
      $("#movie-view").append("<p>Country: " + data.Country + "</p>");
      $("#movie-view").append("<p>Language: " + data.Language + "</p>");
      $("#movie-view").append("<p>Runtime: " + data.Runtime + "</p>");
      $("#movie-view").append("<p>Plot: " + data.Plot + "</p>");
      $("#movie-view").append("<p>Actors: " + data.Actors + "</p>");
      movieView.css("display", "block");
    
      
      movieView.css("border-radius", "20px");
      movieView.css("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)");
      movieView.css("padding", "20px");
      movieView.css("background-color", "grey");
    });
});


