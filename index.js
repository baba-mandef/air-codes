const airports = require("./data/airports.json");
const airlines = require("./data/airlines.json");

module.exports = {
  getAirportByIata: (iataCode) => {
    const airport = airports.find((item) => item.iata == iataCode);
    return airport || null;
  },

  getAirportByIcao: (icaoCode) => {
    const airport = airports.find((item) => item.icao == icaoCode);
    return airport || null;
  },

  getAirlineByIata: (iataCode) => {
    const airline = airlines.find((item) => item.iata == iataCode);
    return airline || null;
  },

  getAirlineByIcao: (icaoCode) => {
    const airline = airlines.find((item) => item.icao == icaoCode);
    return airline || null;
  },
};
