const url = 'https://api.weather.gov/gridpoints/TBW/93,58/forecast?units=us';
const table = document.getElementById('forecast');

fetch(url)
	.then(response => response.json())
	.then(data => {
		console.log(data)
		let forecasts = data.properties.periods;
		console.log(forecasts)
		
			forecasts.map(function(forecast) {
				let row = document.createElement('tr');
				let pic = document.createElement('td');
				let name = document.createElement('td');
				let temp = document.createElement('td');
				let prob = document.createElement('td');
				let pred = document.createElement('td');
				
			pic.innerHTML = `<img src="${forecast.icon}" alt="${forecast.name}"/>`;
			name.innerHTML = `${forecast.name}`;
			temp.innerHTML = `${forecast.temperature}`;
			prob.innerHTML = `${forecast.probabilityOfPrecipitation.value}`;
			pred.innerHTML = `${forecast.shortForecast}`;
				
			row.appendChild(pic);
			row.appendChild(name);
			row.appendChild(temp);
			row.appendChild(prob);
			row.appendChild(pred);
		
			table.appendChild(row);
			console.log(`appended row: ${row}`);
			});
	} )
	.catch((err) => console.warn(err.message));