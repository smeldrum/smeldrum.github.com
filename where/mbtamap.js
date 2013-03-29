//MBTA Map w/ Train Times, by Spencer Meldrum
//Completed 2/16/13	
	var currentLocation;
	var waldoMarker;
	var carmenMarker;
	var myMarker
	myIcon = "images/armadillo.jpg";
	carmenIcon = "images/carmen.png";
	waldoIcon = "images/waldo.png";
	var locationMarker;
	var bostonMap;
	var redLineStations = [];
	var redBranchBraintree = [];
	var markers = [];
	var myLatitude;
	var myLongitude;
	var closestStationDistance=10000;
	var stationPopup = new google.maps.InfoWindow();
	var xmlhttp2;
	var text="";

function initMap() {
	centerOfMap = new google.maps.LatLng(42.330497742, -71.095794678);
		myOptions = {
			zoom: 10,
			center: centerOfMap,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
				
		// Create the map in the "map_canvas" <div>
	bostonMap = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
 
 		// Create the markers
	TStopIcon = "images/mbtalogo.png";
			//create T Stop Markers
			stationLocation = new google.maps.LatLng(42.395428, -71.142483);
			markers.push(new google.maps.Marker({position: stationLocation, title: "Alewife Station", icon: TStopIcon, stationID:"RALE"}));
			redLineStations.push(stationLocation);
				stationLocation = new google.maps.LatLng(42.39674, -71.121815);
				markers.push(new google.maps.Marker({position: stationLocation, title: "Davis Station", icon: TStopIcon, stationID:"RDAV"}));
					redLineStations.push(stationLocation);
				stationLocation = new google.maps.LatLng(42.3884, -71.119149);
				markers.push(new google.maps.Marker({position: stationLocation, title: "Porter Square Station", icon: TStopIcon, stationID:"RPOR"}));
					redLineStations.push(stationLocation);
				stationLocation = new google.maps.LatLng(42.373362, -71.118956);
				markers.push(new google.maps.Marker({position: stationLocation, title: "Harvard Square Station", icon: TStopIcon, stationID:"RHAR"}));
					redLineStations.push(stationLocation);
				stationLocation = new google.maps.LatLng(42.365486, -71.103802);
				markers.push(new google.maps.Marker({position: stationLocation, title: "Central Square Station", icon: TStopIcon, stationID:"RCEN"}));
					redLineStations.push(stationLocation);
				stationLocation = new google.maps.LatLng(42.36249079, -71.08617653);
				markers.push(new google.maps.Marker({position: stationLocation, title: "Kendall/MIT Station", icon: TStopIcon, stationID:"RKEN"}));
					redLineStations.push(stationLocation);
				stationLocation = new google.maps.LatLng(42.361166, -71.070628);
				markers.push(new google.maps.Marker({position: stationLocation, title: "Charles/MGH Station", icon: TStopIcon, stationID:"RMGH"}));
					redLineStations.push(stationLocation);
				stationLocation = new google.maps.LatLng(42.35639457, -71.0624242);
				markers.push(new google.maps.Marker({position: stationLocation, title: "Park St. Station", icon: TStopIcon, stationID:"RPRK"}));
					redLineStations.push(stationLocation);
				stationLocation = new google.maps.LatLng(42.355518, -71.060225);
				markers.push(new google.maps.Marker({position: stationLocation, title: "Downtown Crossing Station", icon: TStopIcon, stationID:"RDTC"}));
					redLineStations.push(stationLocation);
				stationLocation = new google.maps.LatLng(42.352271, -71.055242);
				markers.push(new google.maps.Marker({position: stationLocation, title: "South Station", icon: TStopIcon, stationID:"RSOU"}));
					redLineStations.push(stationLocation);
				stationLocation = new google.maps.LatLng(42.342622, -71.056967);
				markers.push(new google.maps.Marker({position: stationLocation, title: "Broadway Station", icon: TStopIcon, stationID:"RBRO"}));
					redLineStations.push(stationLocation);
				stationLocation = new google.maps.LatLng(42.330154, -71.057655);
				markers.push(new google.maps.Marker({position: stationLocation, title: "Andrew Station", icon: TStopIcon, stationID:"RAND"}));
					redLineStations.push(stationLocation);
				stationLocation = new google.maps.LatLng(42.320685, -71.052391);
				markers.push(new google.maps.Marker({position: stationLocation, title: "JFK/UMass Station", icon: TStopIcon, stationID:"RJFK"}));
					redLineStations.push(stationLocation);
					redBranchBraintree.push(stationLocation);
				stationLocation = new google.maps.LatLng(42.31129, -71.053331);
				markers.push(new google.maps.Marker({position: stationLocation, title: "Savin Hill Station", icon: TStopIcon, stationID:"RSAV"}));
					redLineStations.push(stationLocation);
				stationLocation = new google.maps.LatLng(42.275275, -71.029583);
				markers.push(new google.maps.Marker({position: stationLocation, title: "North Quincy Station", icon: TStopIcon, stationID:"RNQU"}));
					redBranchBraintree.push(stationLocation);
				stationLocation = new google.maps.LatLng(42.2665139, -71.0203369);
				markers.push(new google.maps.Marker({position: stationLocation, title: "Wollaston Station", icon: TStopIcon, stationID:"RWOL"}));
					redBranchBraintree.push(stationLocation);
				stationLocation = new google.maps.LatLng(42.300093, -71.061667);
				markers.push(new google.maps.Marker({position: stationLocation, title: "Fields Corner Station", icon: TStopIcon, stationID:"RFIE"}));
					redLineStations.push(stationLocation);
				stationLocation = new google.maps.LatLng(42.251809, -71.005409);
				markers.push(new google.maps.Marker({position: stationLocation, title: "Quincy Center Station", icon: TStopIcon, stationID:"RQUC"}));
					redBranchBraintree.push(stationLocation);
				stationLocation = new google.maps.LatLng(42.29312583, -71.06573796);
				markers.push(new google.maps.Marker({position: stationLocation, title: "Shawmut Station", icon: TStopIcon, stationID:"RSHA"}));
					redLineStations.push(stationLocation);
				stationLocation = new google.maps.LatLng(42.233391, -71.007153);
				markers.push(new google.maps.Marker({position: stationLocation, title: "Quincy Adams Station", icon: TStopIcon, stationID:"RQUA"}));
					redBranchBraintree.push(stationLocation);
				stationLocation = new google.maps.LatLng(42.284652, -71.064489);
				markers.push(new google.maps.Marker({position: stationLocation, title: "Ashmont Station", icon: TStopIcon, stationID:"RASH"}));
					redLineStations.push(stationLocation);
				stationLocation = new google.maps.LatLng(42.2078543, -71.0011385);
				markers.push(new google.maps.Marker({position: stationLocation, title: "Braintree Station", icon: TStopIcon, stationID:"RCEN"}));
					redBranchBraintree.push(stationLocation);
	//create red line to Ashmont
	redLineConnection = new google.maps.Polyline({
		path: redLineStations,
		strokeColor: "#FF0000",
		strokeOpacity: 1.0,
		strokeWeight: 10
	});
	redLineConnection.setMap(bostonMap);
	
	//create red line to Braintree
	redLineConnection = new google.maps.Polyline({
		path: redBranchBraintree,
		strokeColor: "#FF0000",
		strokeOpacity: 1.0,
		strokeWeight: 10
	});
	redLineConnection.setMap(bostonMap);
	for(var m=0; m<markers.length; m++){
		markers[m].setMap(bostonMap);
		//add popup to each station giving details about train times
		google.maps.event.addListener(markers[m], 'click', function(){
			stationName = this.title;
			station = this;
			var stationInfo = "<p>"+stationName+"</p>";
			var xmlhttp;
			if(window.XMLHttpRequest){
				xmlhttp=new XMLHttpRequest();
				xmlhttp.open("GET","http://mbtamap.herokuapp.com/mapper/redline.json",true);
				xmlhttp.send();
				xmlhttp.onreadystatechange = function (){
					if(xmlhttp.readyState==4 & xmlhttp.status==200)
					{
						times = JSON.parse(xmlhttp.responseText);
						if(times.length>0){
							stationInfo += "<table><tr><th>Line</th><th>Trip #</th><th>Direction</th><th>Time Remaining</th></tr>";
						for(var t=0; t<times.length; t++){
						if(times[t]["PlatformKey"].substring(0,4) == station['stationID']){
							stationInfo += "<tr><td>"+ times[t]["Line"] + "</td>" + "<td>"+ times[t]['Trip'] + "</td>" + "<td>";
						if(times[t]['PlatformKey'][4]=="N"){
							stationInfo+="Northbound";
							
						} else {
							stationInfo+="Southbound";
					} 
					stationInfo+= "</td>" + "<td>"+ times[t]['TimeRemaining'] + "</td></tr>";
					}
					}
					stationInfo += "</table>";
					
					} else {
						stationInfo += "<p>Sorry, there are no trains running now</p>";
					}
					stationPopup.setContent(stationInfo);
					stationPopup.open(bostonMap, station);
					}
			}
	} else {
		console.log("Your browser does not support XML");
		}
	});
	}

	addMyLocation();
}
//Queries for the user's current location
function addMyLocation()
{
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				myLatitude = position.coords.latitude;
				myLongitude = position.coords.longitude;
				placeMyLocation();
			});
		}
		else {
			alert("Sorry folks! No Geolocation for you!");
		}	
}
//Finds distance between two points
function findDistanceBetween(lat1, lat2, long1, long2){
	earthRadius = 3959;
	diffLat = (lat2-lat1)*Math.PI/180;
	diffLong = (lat2-lat1)*Math.PI/180;
	lat3 = lat1*Math.PI/180;
	lat4 = lat2*Math.PI/180;
	firstVar = Math.sin(diffLat/2) * Math.sin(diffLat/2) + Math.sin(diffLong/2) * Math.sin(diffLong/2) * Math.cos(lat3) * Math.cos(lat4);
	secondVar = 2 * Math.atan2(Math.sqrt(firstVar), Math.sqrt(1-firstVar));
	return secondVar * 3959;
}
//create Marker at current location and call Waldo and Carmen functions
function placeMyLocation(){
	currentLocation = new google.maps.LatLng(myLatitude,myLongitude);
	myMarker = new google.maps.Marker({position: currentLocation, title: "Your Location", icon: myIcon});
		myMarker.setMap(bostonMap);
		closestStation = findClosestStation();
		stationPopup.setContent("I am here at ("+myLatitude+", "+myLongitude+"). The closest station to me is "+closestStation['title']+" which is "+closestStationDistance+" miles away from me");
		stationPopup.open(bostonMap, myMarker);
		addWaldoAndCarmen();

	
}
//Function to identify closest station from current location
function findClosestStation(){
	var closestStationMarker;
	for(var m=0; m<markers.length; m++){
	distance = findDistanceBetween(myLatitude, markers[m]['position'].lat(), myLongitude, markers[m]['position'].lng());
		if(distance<closestStationDistance){
			closestStationDistance=distance;
			closestStationMarker=markers[m];
		}
	}
	return closestStationMarker;
}
//Add Waldo and Carmen Sandiego to map given JSON strings received using Ajax
function addWaldoAndCarmen(){
	if(window.XMLHttpRequest){
				xmlhttp2=new XMLHttpRequest();
				xmlhttp2.open("GET","http://messagehub.herokuapp.com/a3.json",true);
				xmlhttp2.send();
				xmlhttp2.onreadystatechange = function(){
					if(xmlhttp2.status==200 & xmlhttp2.readyState==4)
					{
						locations = JSON.parse(xmlhttp2.responseText);
						if(locations.length>0){
							for(var n=0; n<locations.length; n++){
								if(locations[n]['name']=="Waldo"){
										waldoLoc = new google.maps.LatLng(locations[n]['loc']['latitude'],locations[n]['loc']['longitude']);
				waldoMarker = new google.maps.Marker({position: waldoLoc, title: "Waldo", icon: waldoIcon});
								waldoMarker.setMap(bostonMap);
								waldoDistance = findDistanceBetween(myMarker['position'].lat(), locations[n]['loc']['latitude'], myMarker['position'].lng(), locations[n]['loc']['longitude']);
								text="The distance between me and Waldo is "+waldoDistance+" miles.";
		canvas = document.getElementById("text_canvas2");
		canvas.innerHTML = "<p>"+text+"</p>";
								
								}
								if(locations[n]['name']=="Carmen Sandiego"){
								carmenLoc = new google.maps.LatLng(locations[n]['loc']['latitude'],locations[n]['loc']['longitude']);
				carmenMarker = new google.maps.Marker({position: carmenLoc, title: "Carmen Sandiego", icon: carmenIcon});
								carmenMarker.setMap(bostonMap);
								carmenDistance=findDistanceBetween(myMarker['position'].lat(), locations[n]['loc']['latitude'], myMarker['position'].lng(), locations[n]['loc']['longitude']);
								text=" The distance between me and Carmen Sandiego is "+carmenDistance+" miles.";
		canvas = document.getElementById("text_canvas1");
		canvas.innerHTML = text;
								}
							}
						}
					}
						}

}
}
