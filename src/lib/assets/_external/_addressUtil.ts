import { ADDRESS_NOT_FOUND, PIN_OUT_OF_BOUNDS } from '$lib/assets/text/strings';

interface AddressObject {
    road?: string,
    house_number?: string,
    postcode?: string,
    city?: string,
    town?: string,
    village?: string,
    country_code?: string
}

const allowedCountries = ['nl'];

export default async function fetchAddress(lat: number, lng: number): Promise<string> {
    return fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`)
        .then((res) => res.json())
        .then((json) => parseAddress(json.address));
}

function parseAddress(fullAddress: AddressObject) {
    const { country_code, road, house_number, postcode, city, town, village } = fullAddress;
    if (!country_code || !allowedCountries.includes(country_code)) throw Error(PIN_OUT_OF_BOUNDS)
    let addressString = '';
    addressString += road ? road + ' ' : '';
    addressString += house_number ? house_number + ', ' : '';
    addressString += postcode ? postcode + ' ' : '';
    addressString += city ?? town ?? village ?? '';
    return addressString ? addressString : ADDRESS_NOT_FOUND;
}