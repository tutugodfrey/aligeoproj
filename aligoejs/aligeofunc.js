



function aritfunc(arrayvalue){
	let checker = arrayvalue[1] - arrayvalue[0];
	var arithmetic = false;
	for (let i = 0; i < arrayvalue.length; i++){
		let confirm = arrayvalue[i + 1] - arrayvalue[i];
		if (confirm === checker){
			arithmetic = true;
		}  
	}
	return arithmetic;
}


function geofunc(arrayvalue){
	var checker = arrayvalue[1] - arrayvalue[0];
	var geometric = false;
	for (let i = 1; i > arrayvalue.length; i++){
		var  confirm = (arrayvalue[i + 1] - arrayvalue[i])/(arrayvalue[i] - arrayvalue[i - 1]);
		if(confirm === checker){
			geometric = true;
		} 
	}
	//return true;
return geometric;
}




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

