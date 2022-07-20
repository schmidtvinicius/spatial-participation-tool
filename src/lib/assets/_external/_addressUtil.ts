interface AddressObject {
    road?: string,
    house_number?: string,
    postcode?: string,
    city?: string,
    town?: string,
    village?: string,
}

export default async function fetchAddress(lat: number, lng: number): Promise<string> {
    return fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`)
        .then((res) => res.json())
        .then((json) => parseAddress(json.address));
}

function parseAddress(fullAddress: AddressObject) {
    const {road, house_number, postcode, city, town, village} = fullAddress;
    let addressString = '';
    addressString += road ? road + ' ' : '';
    addressString += house_number ? house_number + ', ' : '';
    addressString += postcode ? postcode + ' ' : '';
    addressString += city ?? town ?? village ?? '';
    return addressString ? addressString : 'Sorry, we kunnen dat adres niet vinden!';
}