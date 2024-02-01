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
  // Preventing the submit button from trying to submit the form
  // We're optionally using a form so the user may hit Enter to search instead of clicking the button
  event.preventDefault();

  // Here we grab the text from the input box
  var movie = $("#movie-input").val();

  // Here we construct our URL
  var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

  // Write code between the dashes below to hit the queryURL with fetch(), then take the response data
  // and display it in the div with an id of movie-view

  // YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE

  // =================================================================

  // CODE GOES HERE
  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Create CODE HERE to Log the queryURL
      console.log(queryURL);
      console.log(data);

      var movieView = $("#movie-view");

      $("#movie-view").append("<h2>" + data.Title + "</h2>");
      $("#movie-view").append(
        "<img src=" + data.Poster + " alt=" + data.Title + ">"
      );
      $("#movie-view").append("<p>Year: " + data.Year + "</p>");
      $("#movie-view").append("<p>Rated: " + data.Rated + "</p>");
      $("#movie-view").append("<p>IMDB Rating: " + data.imdbRating + "</p>");
      $("#movie-view").append("<p>Country: " + data.Country + "</p>");
      $("#movie-view").append("<p>Language: " + data.Language + "</p>");
      $("#movie-view").append("<p>Runtime: " + data.Runtime + "</p>");
      $("#movie-view").append("<p>Plot: " + data.Plot + "</p>");
      $("#movie-view").append("<p>Actors: " + data.Actors + "</p>");
    });
  // =================================================================
});
