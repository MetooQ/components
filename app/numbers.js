exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
    valueAtBit : function(num, bit) {
        var str = num.toString(2);
        return parseInt(str[str.length-bit]);
    },

    base10 : function(str) {
        return parseInt(str,2);
    },

    convertToBinary : function(num) {
        var result = num.toString(2)
        if(result.length<8){
            var a = "";
            for(var i = 0; i<8-result.length;i++){
                a += "0";
            }
            result = a+result;
        }
        return result;
    },

    multiply : function(a, b) {
        var al = a.toString().length;
        var bl = b.toString().length;
        var max = al >= bl ? al : bl;
        return (a*b).toFixed(max-2)*1;
    }
};
