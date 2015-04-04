function checkEmail(email){
 var re=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
 return re.test(email);
}