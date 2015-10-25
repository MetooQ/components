exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
    argsAsArray : function(fn, arr) {
        return fn.apply(this,arr);
    },

    speak : function(fn, obj) {
        return fn.apply(obj, obj);
    },

    functionFunction : function(str) {
        return function(){
            return str + ", " + arguments[0];
        }
    },

    makeClosures : function(arr, fn) {
        var result = [];
        for(var i = 0; i<arr.length; i++){
            result[i] = (function(n){
                return function () {
                    return fn(arr[n]);
                };
            })(i);
        }
        return result;
    },

    partial : function(fn, str1, str2) {
        return function(){
            return fn.call(this,str1,str2,arguments[0]);
        }
    },

    useArguments : function() {
        var result = 0;
        for(var i = 0; i<arguments.length; i++){
            result += arguments[i];
        }
        return result;
    },

    callIt : function(fn) {
        var arr = [].slice.call(arguments,1);
        return fn.apply(this,arr);
    },

    partialUsingArguments : function(fn) {
        var arr1 = [].slice.call(arguments,1);
        return function() {
            var arr2 = [].slice.call(arguments);
            return fn.apply(this,arr1.concat(arr2));
        }
    },

    curryIt : function(fn) {
        return function(a){
            return function(b){
                return function(c){
                    return fn(a,b,c);
                }
            }
        }
    }
};
