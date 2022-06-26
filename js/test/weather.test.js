import Forecast from '../src/forecast';
import TestableForecast from './TestableForecast';

describe('Forecast should', function () {
  it("should return proper weather for today in Pamplona", async () => {
    const forecast = new TestableForecast();

    await expect(forecast.predict("pamplona", new Date())).resolves.toMatchInlineSnapshot(`"Mainly clear, partly cloudy, and overcast"`);
  });

  it("should return proper wind for today in Pamplona", async () => {
    const forecast = new TestableForecast();

    await expect(forecast.predict("pamplona", new Date(), true)).resolves.toMatchInlineSnapshot(`20.6`);
  });

  it('should return proper weather for tomorrow in Pamplona', async () => {
    const forecast = new TestableForecast();

    await expect(forecast.predict("pamplona", new Date(new Date().getTime() + 24 * 3600 * 1000))).resolves.toMatchInlineSnapshot(`"Rain showers: Slight, moderate, and violent"`);
  })

  it("should return weather for today when no date is given", async () => {
    const forecast = new TestableForecast();

    await expect(forecast.predict("pamplona")).resolves.toMatchInlineSnapshot(`"Mainly clear, partly cloudy, and overcast"`);
  });
});

describe('#getGeolocation', () => {
  it('should return proper coordinates for Pamplona', async () => {
    const forecast = new TestableForecast();

    await expect(forecast.getGeolocation("pamplona")).resolves.toEqual({
      "latitude": 42.817546,
      "longitude": -1.651163,
    });
  });
});
