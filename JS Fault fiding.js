var year = 2024;
var genre = "Action"; // Set initial genre

$(document).ready(function () {
  // Make the initial API request and update images based on the selected genre
  makeApiRequestAndUpdateImages();
  makeApiRequestAndUpdateImages2();
  makeApiRequestAndUpdateImages3();

  // Update genre when a genre dropdown item is clicked
  $(".dropdown-item.genre").click(function () {
    genre = $(this).text();
    localStorage.setItem("genre", genre);
    console.log("Selected Genre:", genre);
    makeApiRequestAndUpdateImages();
    makeApiRequestAndUpdateImages2();
    makeApiRequestAndUpdateImages3();
    updateButtonPlaceholderText(); // Update button placeholder text
  });

  // Update year when a year dropdown item is clicked
  $(".dropdown-item.year").click(function () {
    year = parseInt($(this).text());
    localStorage.setItem("year", year);
    makeApiRequestAndUpdateImages();
    updateButtonPlaceholderText(); // Update button placeholder text
  });
});

function loadCurrentGenreYear() {
  var selectedYear = localStorage.getItem("year");
  var selectedGenre = localStorage.getItem("genre");
  // updates placeholder text in the year and genre button with the current genre and year
  $(".yearBtn").text(selectedYear);
  $(".genreBtn").text(selectedGenre);
}

function updateButtonPlaceholderText() {
  var selectedYear = localStorage.getItem("year");
  var selectedGenre = localStorage.getItem("genre");
  $(".yearBtn").text(selectedYear);
  $(".genreBtn").text(selectedGenre);
}

// Function to make the API request and update images
function makeApiRequestAndUpdateImages() {
  const settings = {
    async: true,
    crossDomain: true,
    url:
      "https://moviesdatabase.p.rapidapi.com/titles?genre=" +
      genre +
      "&page=1&endYear=" +
      year,
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "74eee32de0msh2eeddd8dfa20c32p1fb626jsn06a7ada8f1e4",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  $.ajax(settings).done(function (response) {
    // Update images based on the response
    let startIndex = 1;
    let endIndex = 5;
    let usedURLs = new Set();

    for (let i = startIndex; i <= endIndex; i++) {
      let resultIndex = 0;

      while (resultIndex < response.results.length) {
        let result = response.results[resultIndex];

        if (
          result &&
          result.primaryImage &&
          result.primaryImage.url &&
          !usedURLs.has(result.primaryImage.url)
        ) {
          $(`.img${i}`).attr("src", result.primaryImage.url);
          usedURLs.add(result.primaryImage.url);
          break; // Move to the next image after setting the URL
        }

        resultIndex++;
      }
    }

    console.log(response);
  });
}

console.log("Hello World");
function makeApiRequestAndUpdateImages2() {
  const settings2 = {
    async: true,
    crossDomain: true,
    url:
      "https://moviesdatabase.p.rapidapi.com/titles?genre=" +
      genre +
      "&page=2&endYear=" +
      year,
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "74eee32de0msh2eeddd8dfa20c32p1fb626jsn06a7ada8f1e4",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  $.ajax(settings2).done(function (response) {
    let startIndex = 6;
    let endIndex = 10;
    let usedURLs = new Set();

    for (let i = startIndex; i <= endIndex; i++) {
      let resultIndex = 0;

      while (resultIndex < response.results.length) {
        let result = response.results[resultIndex];

        if (
          result &&
          result.primaryImage &&
          result.primaryImage.url &&
          !usedURLs.has(result.primaryImage.url)
        ) {
          $(`.img${i}`).attr("src", result.primaryImage.url);
          usedURLs.add(result.primaryImage.url);
          break; // Move to the next image after setting the URL
        }

        resultIndex++;
      }
    }

    console.log(response);
  });
}

function makeApiRequestAndUpdateImages3() {
  const settings3 = {
    async: true,
    crossDomain: true,
    url:
      "https://moviesdatabase.p.rapidapi.com/titles?genre=" +
      genre +
      "&page=3&endYear=" +
      year,
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "74eee32de0msh2eeddd8dfa20c32p1fb626jsn06a7ada8f1e4",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  $.ajax(settings3).done(function (response) {
    let startIndex = 11;
    let endIndex = 15;
    let usedURLs = new Set();

    for (let i = startIndex; i <= endIndex; i++) {
      let resultIndex = 0;

      while (resultIndex < response.results.length) {
        let result = response.results[resultIndex];

        if (
          result &&
          result.primaryImage &&
          result.primaryImage.url &&
          !usedURLs.has(result.primaryImage.url)
        ) {
          $(`.img${i}`).attr("src", result.primaryImage.url);
          usedURLs.add(result.primaryImage.url);
          break; // Move to the next image after setting the URL
        }

        resultIndex++;
      }
    }

    console.log(response);
  });
}

loadCurrentGenreYear();
