import { rp } from "./request";

export async function getGeolocation(city) {
    const response = JSON.parse((await rp("https://positionstack.com/geo_api.php?query=" + city)).body);
    const latitude = response['data'][0]['latitude'];
    const longitude = response['data'][0]['longitude'];
    return { latitude, longitude };
}
