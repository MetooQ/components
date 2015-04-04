var addListener = function(el, type, listener, useCapture){
	if(window.addEventListener){
		el.addEventListener(type, listener, useCapture);
	}else if(document.all){
		el.attachEvent("on" + type, function(){
			listener.apply(el);
		});
	}
}