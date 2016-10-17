// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
var $quakesList;
var map;
var template;

$(document).on("ready", function() {
  //Function to create the map
  initMap();

  //AJAX call to get gmap JSON data
  $quakesList = $.ajax({
    method: "GET",
    url: weekly_quakes_endpoint
  })
  //success function
  .done(function(data){
      console.log(data);
  })
  //fail function
  .fail(function(response){
      console.log("Error:", response);
  });

  });


});
