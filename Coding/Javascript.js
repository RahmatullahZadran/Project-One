console.log("Hello World");

//popup function, Rahmatullah working on it
function openPopup() {
    document.getElementById('overlay').style.display = 'flex';
  }

  function closePopup() {
    document.getElementById('overlay').style.display = 'none';
  }
  $('#overlay').append('<h1>Hello World</h1>');
  $('#overlay').click(closePopup);
  $('#closePopup').click(closePopup);
  