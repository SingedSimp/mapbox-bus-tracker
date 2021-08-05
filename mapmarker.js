// unused

function createMapMarker() {
    // TODO: add your own access token
    mapboxgl.accessToken = 'no';
  
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-71.091542, 42.358862],
        zoom: 12,
    });
  
    // TODO: add a marker to the map
    var marker = new mapboxgl.Marker()
        .setLngLat([-71.091542,42.358862])
        .addTo(map)
  }
  
  // Do not edit the code below
  window.onload = () => {
      createMapMarker();
  };
  
  // Do not edit code past this point
  if (typeof module !== 'undefined') {
      module.exports = { createMapMarker };
}