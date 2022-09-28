const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': 'dca8640511msh1a1b0c899c517d2p109739jsn14ea5a0101a5',
		'X-RapidAPI-Host': 'big-five-personality-insights.p.rapidapi.com'
	},
	body: '[{"id":"1","language":"en","text":"I love this service"}]'
};

fetch('https://big-five-personality-insights.p.rapidapi.com/api/big5', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));