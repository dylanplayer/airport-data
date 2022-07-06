const fs = require('fs');

const data = JSON.parse(fs.readFileSync('../src/data/airports.json'));
const topRoutes = JSON.parse(fs.readFileSync('../src/data/dirty/topRoutes.json'));

const flights = topRoutes.map((route) => {
  const startAirport = data.find((airport) => String(airport.name).toLowerCase() === route.start.toLowerCase());
  const endAirport = data.find((airport) => String(airport.name).toLowerCase() === route.end.toLowerCase());
  return {
    startLat: startAirport.lat,
    startLng: startAirport.lng,
    endLat: endAirport.lat,
    endLng: endAirport.lng,
    start: startAirport.name,
    end: endAirport.name,
  }
});

fs.writeFileSync('../src/data/topRoutes.json', JSON.stringify(flights));
