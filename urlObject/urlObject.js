function parseQueryString(string){
	var obj = {};
	var start = string.indexOf("?") + 1;
	var str = string.substr(start);
	var arr = str.split("&");
	for(var i=0; i<arr.length; i++){
		var arr2 = arr[i].split("=");
		obj[arr2[0]] = arr2[1];
	}
	return obj;

}