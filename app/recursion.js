exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
    listFiles : function listFiles(data, dirName) {
        var result = [];
        function list(data, dirName,include){
            var dir = data.dir;
            var files = data.files;
            for(var i = 0; i<files.length; i++){
                if(typeof files[i] === 'object'){
                    list(files[i],dirName,include);
                }else{
                    if(!include){
                       result.push(files[i]); 
                    }else{
                        if(dir === dirName){
                            result.push(files[i]);
                            include = 0;
                        }
                    }
                    
                }
            }
           
        };      
        if(dirName){
            list(data,dirName,1);
        }else{
            list(data,dirName,0);
        }                   
        return result;
        
    },

    permute : function(arr) {
        
    },

    fibonacci : function fibonacci(n) {
        if(n<2){
            return n;
        }    
        return fibonacci(n-1) + fibonacci(n-2);
    },

    validParentheses : function(n) {
        
    }
};
