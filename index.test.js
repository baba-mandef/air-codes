const airCodes = require("aircodes");

const airport_ = {
  iata: "AAA",
  icao: "NTGA",
  name: "Anaa Airport",
  city: "Anaa",
  state: "Tuamotus",
  country: "French Polynesia",
};

const airline_ = {
  iata: "AA",
  icao: "AAL",
  name: "American Airlines",
  logo: "https://www.avcodes.co.uk/images/logos/AAL.png",
};

describe("Air Codes", () => {
  describe("getAirportByIata", () => {
    it("should return the airport object for a valid IATA code", () => {
      const airport = airCodes.getAirportByIata("AAA");
      expect(airport).toEqual(airport_);
    });

    it("should return null for an invalid IATA code", () => {
      const airport = airCodes.getAirportByIata("XYZ");
      expect(airport).toBeNull();
    });
  });

  describe("getAirportByIcao", () => {
    it("should return the airport object for a valid ICAO code", () => {
      const airport = airCodes.getAirportByIcao("NTGA");
      expect(airport).toEqual(airport_);
    });

    it("should return null for an invalid ICAO code", () => {
      const airport = airCodes.getAirportByIcao("XYZ");
      expect(airport).toBeNull();
    });
  });

  describe("getAirlineByIata", () => {
    it("should return the airline object for a valid IATA code", () => {
      const airline = airCodes.getAirlineByIata("AA");
      expect(airline).toEqual(airline_);
    });

    it("should return null for an invalid IATA code", () => {
      const airline = airCodes.getAirlineByIata("XYZ");
      expect(airline).toBeNull();
    });
  });

  describe("getAirlineByIcao", () => {
    it("should return the airline object for a valid ICAO code", () => {
      const airline = airCodes.getAirlineByIcao("AAL");
      expect(airline).toEqual(airline_);
    });

    it("should return null for an invalid ICAO code", () => {
      const airline = airCodes.getAirlineByIcao("XYZ");
      expect(airline).toBeNull();
    });
  });

   describe("findAirport", () => {
    it("should return an array of matching airports", () => {
      const results = airCodes.findAirport("cotonou");
      expect(results).toContainEqual(
        {
          iata: 'COO',
          icao: 'DBBB',
          name: 'Cadjehoun Airport',
          city: 'Cotonou',
          state: '',
          country: 'Benin'
        }
        
      );
    });
  });

  describe("findAirline", () => {
    it("should return an array of matching airlines", () => {
      const results = airCodes.findAirline("brussel");
      expect(results).toContainEqual(
        {
          iata: 'SN',
          icao: 'BEL',
          name: 'Brussels Airlines N.V.',
          logo: 'https://www.avcodes.co.uk/images/logos/BEL.png'
        }
       
      );
    });
  }); 
});
