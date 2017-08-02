/* function to test whether an array is empty or contain integer that
 is earithmetic in progression or geometric or neither */
 
module.exports = function aritGeo(arrayvalue) {
	if (arrayvalue.length === 0){
		//input not an array
		return 0;
	} 	else   {
		let checker1 = arrayvalue[1] - arrayvalue[2];   //store common difference
		var progressing = true;
		var counter = 2;							//increment loop
		var  geometric = false;
		var arithmetic = false;
		while (progressing){
			if (arrayvalue[counter] - arrayvalue[counter -1] === arrayvalue[counter -1] - arrayvalue[counter - 2]){
				arithmetic  = true;

			}	else {
				arithmetic = false;
				progressing = false;  				//offset  progressing when case fails

			} 	

			
			if ((arrayvalue[counter] - arrayvalue[counter -1] ) / (arrayvalue[counter -1] - arrayvalue[counter - 2]) ===
				(arrayvalue[1] - arrayvalue[0]) ){
				geometric = true;
			}	else {
				geometric = false;
				progressing = false;				//offset progressing when case fails
			}
			
			counter ++;
		}

		if (geometric === true){
			return "Geometric";
		} else if (arithmetic === true){
			return "Arithmetic";
		}	else {
				//when input is not empty but it's neither arithmetic not geometric
			return -1;
		}



	}

}

