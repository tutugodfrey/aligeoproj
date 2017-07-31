

module.exports = function arigeo(arrayvalue) {
	if(arrayvalue.length === 0){
		return 0;
	}  else {
		var arraycounter = 0;
		let checker = arrayvalue[1] - arrayvalue[0];
		var progressing = true;
		var arithmetic = false;
		var geometric = false;
 		var geometricratio;


 		for(let i = 0; i < arrayvalue.length; i++){
 			var secondcheck = arrayvalue[i + 1] -  arrayvalue[i];
 			if(secondcheck === checker){
 				arithmetic = true;
 			} else if (){}


 			


 		}//end for block



	} //end else

	if (arithmetic === true){
		return "Arithmetic";
	}
	if (geometric === true ){
		return "Geometric";

	}

}