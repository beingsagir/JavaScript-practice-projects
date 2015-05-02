function calculateIt(input){
	var input = document.getElementById("inputValue").value;
	console.log(input);
	var splitedByMinus = input.split("-");
	if(splitedByMinus.length>1){
		var result = add(splitedByMinus[0]);
			for (var i = 0; i <splitedByMinus.length-1; i++) {
				var result = result - add(splitedByMinus[i+1]);
				console.log("minus "+result);
			};		
	}else if(splitedByMinus.length == 1){
		var result = add(splitedByMinus[0]);
	}else{
		result= "please check a valid input !!";
	}
	document.getElementById("result").innerHTML = result;



	function add(inputToAdd){
		var splitedByPlus = inputToAdd.split("+");
		if(splitedByPlus.length > 1){
			var result = 0;
			for (var i = splitedByPlus.length - 1; i >= 0; i--) {
				console.log(splitedByPlus[i]);
				result = result + parseFloat(mul(splitedByPlus[i]));
			};
		}else{
			result = mul(inputToAdd);
		}
		return result;
	}

	function mul(inputToMul){
		var splitedByMul = inputToMul.split("*");
		console.log('mul:'+splitedByMul);
		if(splitedByMul.length > 1){
			var result = 1;
			for (var i = splitedByMul.length - 1; i >= 0; i--) {
				console.log(splitedByMul[i]);
				result = result * parseFloat(div(splitedByMul[i]));
			};
		}else{
			result = div(inputToMul);
		}
		return result;
	}

	function div(inputToDiv){
		var spiltByDiv = inputToDiv.split("/");
		console.log('div basic:'+spiltByDiv);
		if(spiltByDiv.length>1){
		var result = spiltByDiv[0];
			for (var i = 0; i <spiltByDiv.length-1; i++) {
				var result = result / spiltByDiv[i+1];
				console.log("div "+result);
			};		
		}else{
			var result = spiltByDiv[0];
		}
		return result;
	}

}