# air-codes

This module provides functions to retrieve airport and airline information based on IATA and ICAO codes.

## Installation

Install air-codes using the following command

```bash
npm install  aircodes
```

## Usage

First, require the module in your JavaScript file:

```javascript
const airportData = require("aircodes");
```

### Retrieving Airport Information

To retrieve airport information based on IATA or ICAO codes, you can use the following functions:

#### `getAirportByIata(iataCode)`

This function takes an IATA code as an argument and returns the airport object matching the code, or `null` if not found.

Example usage:

```javascript
const airport = airportData.getAirportByIata("AAA");
console.log(airport);
```

Output:

```javascript
{
  "iata": "AAA",
  "icao": "NTGA",
  "name": "Anaa Airport",
  "city": "Anaa",
  "state": "Tuamotus",
  "country": "French Polynesia"
}
```

#### `getAirportByIcao(icaoCode)`

This function takes an ICAO code as an argument and returns the airport object matching the code, or `null` if not found.

Example usage:

```javascript
const airport = airportData.getAirportByIcao("NTGA");
console.log(airport);
```

Output:

```javascript
{
  "iata": "AAA",
  "icao": "NTGA",
  "name": "Anaa Airport",
  "city": "Anaa",
  "state": "Tuamotus",
  "country": "French Polynesia"
}
```

### Retrieving Airline Information

To retrieve airline information based on IATA or ICAO codes, you can use the following functions:

#### `getAirlineByIata(iataCode)`

This function takes an IATA code as an argument and returns the airline object matching the code, or `null` if not found.

Example usage:

```javascript
const airline = airportData.getAirlineByIata("AA");
console.log(airline);
```

Output:

```javascript
{
  "iata": "AA",
  "icao": "AAL",
  "name": "American Airlines",
  "logo": "https://www.avcodes.co.uk/images/logos/AAL.png",
}
```

#### `getAirlineByIcao(icaoCode)`

This function takes an ICAO code as an argument and returns the airline object matching the code, or `null` if not found.

Example usage:

```javascript
const airline = airportData.getAirlineByIcao("AAL");
console.log(airline);
```

Output:

```javascript
{
  "iata": "AA",
  "icao": "AAL",
  "name": "American Airlines",
  "logo": "https://www.avcodes.co.uk/images/logos/AAL.png",
}
```

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, please create an issue or submit a pull request.

## License

This module is licensed under the [MIT License](https://opensource.org/licenses/MIT).
