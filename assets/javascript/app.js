var map;
var service;
var infowindow;

function initialize() {
  var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);

  map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });

  var request = {
    location: pyrmont,
    radius: '500',
    query: 'restaurant'
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}


  $(document).ready(function () {
    // initMap();    
    initialize()
}) 


// Google places 

// function initMap() {
//     var map = new google.maps.Map(document.getElementById('map'), {
//       center: {lat: -33.866, lng: 151.196},
//       zoom: 15
//     });
  
//     var infowindow = new google.maps.InfoWindow();
//     var service = new google.maps.places.PlacesService(map);
  
//     service.getDetails({
//       placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4'
//     }, function(place, status) {
//       if (status === google.maps.places.PlacesServiceStatus.OK) {
//         var marker = new google.maps.Marker({
//           map: map,
//           position: place.geometry.location
//         });
//         google.maps.event.addListener(marker, 'click', function() {
//           infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
//             'Place ID: ' + place.place_id + '<br>' +
//             place.formatted_address + '</div>');
//           infowindow.open(map, this);
//         });
//       }
//     });
//   }

// // Note: This example requires that you consent to location sharing when
// // prompted by your browser. If you see the error "The Geolocation service
// // failed.", it means you probably did not give permission for the browser to
// // locate you.
// var map, infoWindow;

// function initMap() {
//     // map = new google.maps.Map(document.getElementById('map'), {
//     //     // center: { lat: -34.397, lng: 150.644 },
//     //     // center: {lat: position.coords.latitude, lng: position.coords.longitude},
//     //     center: pos,
//     //     zoom: 4
//     // });
//     // infoWindow = new google.maps.InfoWindow;

//     // HTML5 geolocation.
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function (position) {
//             var pos = {
//                 lat: position.coords.latitude,
//                 lng: position.coords.longitude
//             };

//             map = new google.maps.Map(document.getElementById('map'), {
//                 // center: { lat: -34.397, lng: 150.644 },
//                 center: pos,
//                 zoom: 5
//             });
//             infoWindow = new google.maps.InfoWindow;

//             // console.log("postion value is " + position);
//             // console.log("pos value is " + pos);

//             // infoWindow.setPosition(pos);
//             // // infoWindow.setContent('Location found.');
//             // infoWindow.open(map);
//             // map.setCenter(pos);

//             // Place the initial marker
//             var marker = new google.maps.Marker({
//                 position: pos,
//                 map: map,
//                 title: "Your current location!"
//             });

//             var service = new google.maps.places.PlacesService(map);

//             // service.getDetails({
//             //     placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4'
//             // }, function (place, status) {
//             //     if (status === google.maps.places.PlacesServiceStatus.OK) {
//             //         var marker = new google.maps.Marker({
//             //             map: map,
//             //             position: place.geometry.location
//             //         });
//             //         google.maps.event.addListener(marker, 'click', function () {
//             //             infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
//             //                 'Place ID: ' + place.place_id + '<br>' +
//             //                 place.formatted_address + '</div>');
//             //             infowindow.open(map, this);
//             //         });
//             //     }
//             // });


//         }, function () {
//             handleLocationError(true, infoWindow, map.getCenter());
//         });
//     } else {
//         // Browser doesn't support Geolocation
//         handleLocationError(false, infoWindow, map.getCenter());
//     }


// }

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//     infoWindow.setPosition(pos);
//     infoWindow.setContent(browserHasGeolocation ?
//         'Error: The Geolocation service failed.' :
//         'Error: Your browser doesn\'t support geolocation.');
//     infoWindow.open(map);
// }

// // function serachLocation() {

// // }


// //Request places from Google
// function placesRequest(title, latlng, radius, types, icon) {
//     //Parameters for our places request
//     var request = {
//         location: latlng,
//         radius: radius,
//         types: types
//     };
//     //Make the service call to google
//     var callPlaces = new google.maps.places.PlacesService(map);
//     callPlaces.search(request, function (results, status) {
//         //trace what Google gives us back
//         $.each(results, function (i, place) {
//             var placeLoc = place.geometry.location;
//             var thisplace = new google.maps.Marker({
//                 map: map,
//                 position: place.geometry.location,
//                 icon: icon,
//                 title: place.name
//             });
//         })
//     });

// }

// $(document).ready(function () {
//     initMap();
//     //search for schools within 1500 metres of our current location, and as a marker use school.png
//     placesRequest('Schools', coords, 1500, ['school'], 'images/school.png');
// }) 