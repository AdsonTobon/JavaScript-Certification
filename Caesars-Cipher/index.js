


  function rot13(str) {
   var solucion="";
   for( var i=0;i<str.length; i++){
       var convertidorNumero = str[i].charCodeAt();
       if(convertidorNumero>=65 && convertidorNumero<=99){
           solucion+= String.fromCharCode(convertidorNumero+13);
       }else if(convertidorNumero>=78 && convertidorNumero<=90){
           solucion+=String.fromCharCode(convertidorNumero-13);
       }else{
           solucion+=str[i];
       }
   }
   return solucion;
   
  }

  console.log(rot13("AB"));
