import Forecast from "../src/forecast";

class TestableForecast extends Forecast {
  getPrediction() {
    return Promise.resolve({
      current_weather: {
        temperature: 39.4,
        time: "2022-06-18T16:00",
        weathercode: 1,
        winddirection: 161,
        windspeed: 20.2,
      },
      daily: {
        time: [
          "2022-06-18",
          "2022-06-19",
          "2022-06-20",
          "2022-06-21",
          "2022-06-22",
          "2022-06-23",
          "2022-06-24",
        ],
        weathercode: [3, 80, 80, 3, 80, 3, 45],
        windspeed_10m_max: [20.6, 32.7, 21.1, 18.7, 19.8, 17, 14.1],
      },
      daily_units: {
        time: "iso8601",
        weathercode: "wmo code",
        windspeed_10m_max: "km/h",
      },
      elevation: 450,
      generationtime_ms: 0.4680156707763672,
      latitude: 42.8125,
      longitude: -1.625,
      utc_offset_seconds: 7200,
    });
  }

  getGeolocation() {
    return Promise.resolve({
      latitude: 42.817546,
      longitude: -1.651163,
    });
  }
}

export default TestableForecast;
