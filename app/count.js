exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers = {
    count : function count(start, end) {
        // var nums = [];
        setTimeout(function(){
            if(start<=end){
                nums.push(start);
                start++;
                setTimeout(count, 100, start++, end);
            }
        },100);       
        
    },
    cancel : function(timer) {
        clearInterval(timer);
    }
};
