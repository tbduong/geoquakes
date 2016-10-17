// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
var $quakesList;
var map;
var template;

$(document).on("ready", function() {
  //Function called to embed map
  initMap();

  //AJAX call to get gmap JSON data
  $quakesList = $.ajax({
    method: "GET",
    url: weekly_quakes_endpoint
  })
  //success function
  .done(function(data){
    // console.log(data);
    var earthquakes = data.features;
    console.log(data.features);
    //need to call function that creates marker for earthquake location
    //need to include handlebars template for quakes
  })
  //fail function
  .fail(function(response){
      console.log("Error:", response);
  });

//this function will create the map
function initMap(){
  //define initial position on map
  var pos = {lat: 37.77, lng: -122.45};
  map = new google.maps.Map(document.getElementById("map"), {
    center: pos,
    zoom:2
  });
}








});
