function sort(array){
     var tmp;
     for(var i=0; i<array.length; i++){
         for(var j=0; j<array.length-i; j++){
             if(array[j]>array[j+1]){
                 tmp = array[j];
                 array[j] = array[j+1];
                 array[j+1] = tmp;
             }
         }
  
     }
 }