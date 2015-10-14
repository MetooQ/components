function checkEmail(email){
 var re=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
 
 var re2 = /^([\w\.])+\@(([\w])+\.)+([\w]+)+$/;
 return re.test(email);
}
