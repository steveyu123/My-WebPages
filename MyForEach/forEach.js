function myForEach(arr, func) {

	for(var i =0; i<arr.length; i++){
		//loop through array
		//call func
		func(arr[i]);
		}
		
	}
}

Array.prototype.myForEach = function(func){
	for (var i = 0; i < this.length; i++){
		func(this[i]);
	}
}