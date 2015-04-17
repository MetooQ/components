var arr = [1,2,3];
arr.join(); //'1,2,3'
arr.join('_'); //'1_2_3'


function repeatString(str, n){
	return new Array(n+1).join(str);
}

repeatString("a", 3); //'aaa'