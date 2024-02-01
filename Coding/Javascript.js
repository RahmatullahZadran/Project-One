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