exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
    containsNumber : function(str) {
        return /\d/.test(str);
    },

    containsRepeatingLetter : function(str) {
        return /([a-z]|[A-Z]{1})\1+/.test(str);
    },

    endsWithVowel : function(str) {
        return /[a|A|e|E|i|I|o|O|u|U]$/.test(str);
    },

    captureThreeNumbers : function(str) {
        var match = /\d{3}/.exec(str)
        if(match){
            return match[0];
        }
        return false;       
    },

    matchesPattern : function(str) {
        return /^\d{3}-\d{3}-\d{4}$/.test(str);
    },

    isUSD : function(str) {
        return /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/.test(str);
    }
};
