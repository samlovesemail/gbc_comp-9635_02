console.log(google)
//Same as '$(document).ready()' in jQuery
google.maps.event.addDomListener(window, 'load', function(){

	navigator.geolocation.getCurrentPosition(function(position){
		console.log(position);

		//same as '$('#map-canvas'). in jQuery
		var map_canvas = document.getElementById('map-canvas');
		var lat = position.coords.latitude;
		var lng = position.coords.longitude; 
		var myLatLng = new google.maps.LatLng(lat,lng);
		var myMap = new google.maps.Map(map_canvas,{
			zoom: 17,
			center: myLatLng,
		});
			new google.maps.Marker({
				position: myLatLng,
				map: myMap,
		})
	});
});
