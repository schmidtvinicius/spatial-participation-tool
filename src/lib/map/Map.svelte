<script>
    import { onMount } from 'svelte';
    import { browser } from '$app/env';
	let map;

    onMount(async () => {
        if(browser) {
            const L = await import('leaflet');

            const map = L.map('map').setView([51.505, -0.09], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([51.5, -0.09]).addTo(map)
                .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
                .openPopup();
        }
    });
</script>

<div id="map"></div>

<style>
    @import 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';
    #map {
        width: 100%;
        height: 100vh;
    }
</style>
