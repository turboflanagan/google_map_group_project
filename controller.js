angular.module('myApp', []).controller('mapCtrl', function($scope){

	var mapOption = {
		zoom: 4,
		//center of the US 
		center: new google.maps.LatLng(40.0000, -98.0000),
		mapTypeId: google.maps.mapTypeId.TERRAIN
	}

});