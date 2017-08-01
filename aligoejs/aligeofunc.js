/* function to test whether an array is empty or contain integer that
 is earithmetic in progression or geometric or neither */
 
module.exports = function arigeo(arrayvalue) {
	if (arrayvalue.length === 0){
		return 0;
	} 	else   {
		let checker1 = arrayvalue[1] - arrayvalue[2];
		var progressing = true;
		var counter = 2;
		var  geometric = false;
		var arithmetic = false;
		while (progressing){
			if (arrayvalue[counter] - arrayvalue[counter -1] === arrayvalue[counter -1] - arrayvalue[counter - 2]){
				arithmetic  = true;

			}	else {
				arithmetic = false;
				progressing = false;

			} 	

			
			if ((arrayvalue[counter] - arrayvalue[counter -1] ) / (arrayvalue[counter -1] - arrayvalue[counter - 2]) ===
				(arrayvalue[1] - arrayvalue[0]) ){
				geometric = true;
			}	else {
				geometric = false;
				progressing = false;
			}
			
			counter ++;
		}

		if (geometric === true){
			return "Geometric";
		} else if (arithmetic === true){
			return "Arithmetic";
		}	else {
			return -1;
		}



	}

}

