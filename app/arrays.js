exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var result = 0;
        for(var i = 0, len = arr.length; i<len; i++){
            result += arr[i];
        }
        return result;
    },

    remove : function(arr, item) {
        // var result = [];
        // for(var i = 0, len = arr.length; i<len; i++){
        //     if(arr[i] !== item){
        //         result.push(arr[i]);
        //     }
        // }
        // return result;
        return arr.filter(function(e) {
            return e !== item;
        })
    },

    removeWithoutCopy : function(arr, item) {
        for (var i = arr.length - 1; i >= 0; --i) {
            if (arr[i] === item) {
                arr.splice(i, 1);
            }
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index,0,item);
        return arr;
    },

    count : function(arr, item) {
        var count = 0;
        for(var i = 0, len = arr.length; i<len; i++){
            if(arr[i] === item){
                count++;
            }
        }
        return count;
    },

    duplicates : function(arr) {
        var map = {};
        var result = []
        for(var i = 0, len = arr.length; i<len; i++){
            if(map[arr[i]]){
                map[arr[i]]++;
            }else{
                map[arr[i]] = 1;
            }
        }
        for(var i in map){
            if(map[i] > 1){
                result.push(parseInt(i));
            }
        }
        return result;
    },

    square : function(arr) {
        var result = [];
        for(var i = 0, len = arr.length; i<len; i++){
            result.push(Math.pow(arr[i],2));
        }
        return result;
    },

    findAllOccurrences : function(arr, target) {
        var result = []
        for(var i = 0, len = arr.length; i<len; i++){
            if(arr[i] === target){
                result.push(i);
            }
        }
        return result;
    }
};
