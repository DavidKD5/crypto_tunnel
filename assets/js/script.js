
var current_date = document.querySelector("#current_date");
current_date.textContent= moment().format('MMMM Do, YYYY');

// //alpha vantage 
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '18330ded51msh3dabe5034d92f2fp17b6fajsn49e03e37e4b5',
// 		'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
// 	}
// };

// fetch('https://alpha-vantage.p.rapidapi.com/query?market=USD&symbol=BTC&function=DIGITAL_CURRENCY_DAILY', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));



var title12 = (data.articles[11].title);
var image12 = (data.articles[11].image);
var link12 = (data.articles[11].url);
var content12 = (data.articles[11].description);

let newsImage12 = document.getElementById('newsImage'+12);
newsImage12.src = image12;
let newsLink12 = document.getElementById('newsLink'+12);
newsLink12.href = link12;
let newsTitle12 = document.getElementById('newsTitle'+12);
newsTitle12.textContent = title12;
let newsContent12 = document.getElementById('newsContent'+12);
newsContent12.textContent = content12;