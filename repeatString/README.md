利用array的原型方法join来重复字符串  


function repeatString(str, n){  
	return new Array(n+1).join(str);  
}  

str为需要重复的字符串  
n为重复次数  

将str作为需要拼接的间隔符，重复 n+1 次。  

arr.join('_'); //'1_2_3'  
'_'重复了两次


