// JavaScript Document

//---PASAR DE KM A MILLAS, O AL REVEZ----
MathUtils = (function() {

	// Funciones matemáticas
	var KM_IN_MI = 1.609344;

	function roundWithDecs(f, d) {
		f = parseFloat(f);
		if(!isNaN(f)) {
			if(!d) {
				var d = 0;
			}
			var factor = Math.pow(10, d);
			return Math.floor(f * factor + ((f * factor * 10) % 10 >= 5 ? 1 : 0)) / factor;
		} else {
			return f;
		}
	}

	function milesToKilometers(miles) {
		return miles * KM_IN_MI;
	}

	function kilometersToMiles(kilometers) {
		return kilometers / KM_IN_MI;
	}

	//Métodos públicos
	return {
		round: roundWithDecs,
		miToKm: milesToKilometers,
		kmToMi: kilometersToMiles
	}

})();


geoUtils = (function(){
function geoDistance(lat1,lon1,lat2,lon2){

	console.log("entro a  la funcion");

	var R=6371; //Earth mean /spherical radius, in km.
	var PI_180=0.017453292519994; //convierte a radianes
	var deltaLat= (lat2 - lat1) * PI_180;
	var deltaLon =(lon2 - lon1) * PI_180;
	var deltaLat2= deltaLat/2;
	var deltaLon2= deltaLon/2;
	var a =Math.sin(deltaLat2) * Math.sin(deltaLat2) + Math.cos(lat1 * PI_180) * Math.cos(lat2 * PI_180) * Math.sin(deltaLon2) * Math.sin(deltaLon2);
	var c= 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	return (R * c);
}
//API
return {
	distanceBetweenTwoPoints: geoDistance
};
})();


