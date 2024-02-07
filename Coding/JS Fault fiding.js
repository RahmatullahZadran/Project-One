const settings = {
	async: true,
	crossDomain: true,
	url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '74eee32de0msh2eeddd8dfa20c32p1fb626jsn06a7ada8f1e4',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {

   var pic1 = response.results[0].primaryImage.url;
//first row
    //replace src with the first image from the response array
    $('.img1').attr('src', response.results[0].primaryImage.url);
    $('.img2').attr('src', response.results[1].primaryImage.url);
    $('.img3').attr('src', response.results[4].primaryImage.url);
    $('.img4').attr('src', response.results[5].primaryImage.url);
    $('.img5').attr('src', response.results[6].primaryImage.url);


    // $('.img6').attr('src', response.results[7].primaryImage.url);
    // $('.img7').attr('src', response.results[8].primaryImage.url);
    // $('.img8').attr('src', response.results[9].primaryImage.url);
    // $('.img9').attr('src', response.results[8].primaryImage.url);
    // $('.img10').attr('src', response.results[9].primaryImage.url);
    // $('.img11').attr('src', response.results[10].primaryImage.url);
    // $('.img12').attr('src', response.results[11].primaryImage.url);
    // $('.img13').attr('src', response.results[12].primaryImage.url);
    // $('.img14').attr('src', response.results[13].primaryImage.url);
    // $('.img15').attr('src', response.results[14].primaryImage.url);

	console.log(response);
});

console.log("Hello World");


const settings2 = {
	async: true,
	crossDomain: true,
	url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming?page=2',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '74eee32de0msh2eeddd8dfa20c32p1fb626jsn06a7ada8f1e4',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

$.ajax(settings2).done(function (response) {
    $('.img6').attr('src', response.results[0].primaryImage.url);
    $('.img7').attr('src', response.results[3].primaryImage.url);
    $('.img8').attr('src', response.results[5].primaryImage.url);
    $('.img9').attr('src', response.results[7].primaryImage.url);
    $('.img10').attr('src', response.results[8].primaryImage.url);
    // $('.img11').attr('src', response.results[5].primaryImage.url);
    // $('.img12').attr('src', response.results[6].primaryImage.url);
    // $('.img13').attr('src', response.results[7].primaryImage.url);
    // $('.img14').attr('src', response.results[8].primaryImage.url);
    // $('.img15').attr('src', response.results[9].primaryImage.url);
    
    




	console.log(response);
});

const settings3 = {
	async: true,
	crossDomain: true,
	url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming?page=3',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '74eee32de0msh2eeddd8dfa20c32p1fb626jsn06a7ada8f1e4',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

$.ajax(settings3).done(function (response) {
    // $('.img6').attr('src', response.results[0].primaryImage.url);
    // $('.img7').attr('src', response.results[3].primaryImage.url);
    // $('.img8').attr('src', response.results[5].primaryImage.url);
    // $('.img9').attr('src', response.results[7].primaryImage.url);
    // $('.img10').attr('src', response.results[8].primaryImage.url);

    $('.img11').attr('src', response.results[0].primaryImage.url);
    $('.img12').attr('src', response.results[1].primaryImage.url);
    $('.img13').attr('src', response.results[2].primaryImage.url);
    $('.img14').attr('src', response.results[6].primaryImage.url);
    $('.img15').attr('src', response.results[5].primaryImage.url);

	console.log(response);
});









// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://imdb-top-100-movies.p.rapidapi.com/',
//   headers: {
//     'X-RapidAPI-Key': '74eee32de0msh2eeddd8dfa20c32p1fb626jsn06a7ada8f1e4',
//     'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }