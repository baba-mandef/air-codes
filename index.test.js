const iataCodes = require("air-codess");

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

describe("Iatas Codes", () => {
  describe("getAirportByIata", () => {
    it("should return the airport object for a valid IATA code", () => {
      const airport = iataCodes.getAirportByIata("AAA");
      expect(airport).toEqual(airport_);
    });

    it("should return null for an invalid IATA code", () => {
      const airport = iataCodes.getAirportByIata("XYZ");
      expect(airport).toBeNull();
    });
  });

  describe("getAirportByIcao", () => {
    it("should return the airport object for a valid ICAO code", () => {
      const airport = iataCodes.getAirportByIcao("NTGA");
      expect(airport).toEqual(airport_);
    });

    it("should return null for an invalid ICAO code", () => {
      const airport = iataCodes.getAirportByIcao("XYZ");
      expect(airport).toBeNull();
    });
  });

  describe("getAirlineByIata", () => {
    it("should return the airline object for a valid IATA code", () => {
      const airline = iataCodes.getAirlineByIata("AA");
      expect(airline).toEqual(airline_);
    });

    it("should return null for an invalid IATA code", () => {
      const airline = iataCodes.getAirlineByIata("XYZ");
      expect(airline).toBeNull();
    });
  });

  describe("getAirlineByIcao", () => {
    it("should return the airline object for a valid ICAO code", () => {
      const airline = iataCodes.getAirlineByIcao("AAL");
      expect(airline).toEqual(airline_);
    });

    it("should return null for an invalid ICAO code", () => {
      const airline = iataCodes.getAirlineByIcao("XYZ");
      expect(airline).toBeNull();
    });
  });
});
