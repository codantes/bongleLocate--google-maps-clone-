mapboxgl.accessToken = 'pk.eyJ1IjoibWlsZGx5cHJhbmF2IiwiYSI6ImNreHlrMWk2dzIxZmEyb296ZHVxNXp3OW8ifQ.jclEW_N4rHrT9qdI7Posuw';

navigator.geolocation.getCurrentPosition(successLocation, 
    errorLocation, 
    {enableHighAccuracy: true})

function successLocation(position) {
    console.log(position);
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    setupMap([position.coords.longitude , position.coords.latitude])
}

function errorLocation(){

}


function setupMap(current){

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: current,
  zoom: 16
});

map.addControl(new mapboxgl.NavigationControl() );

var directions = new MapboxDirections({
    accessToken: 'pk.eyJ1IjoibWlsZGx5cHJhbmF2IiwiYSI6ImNreHlrMWk2dzIxZmEyb296ZHVxNXp3OW8ifQ.jclEW_N4rHrT9qdI7Posuw',
  });

  map.addControl(directions, 'top-left');
}