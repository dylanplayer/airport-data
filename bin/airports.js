const fs = require('fs');

const data = JSON.parse(fs.readFileSync('../src/data/dirty/airports.json'));

const airports = [];

data.results.forEach((airport) => {
  if(airport.iata_code !== '' && airport.wikipedia_link !== '') {
    airports.push({
      lat: airport.latitude_deg,
      lng: airport.longitude_deg,
      name: airport.iata_code,
      size: .07,
      color: 'red',
      link: airport.wikipedia_link,
    });
  }
});

fs.writeFileSync('../src/data/airports.json', JSON.stringify(airports));
