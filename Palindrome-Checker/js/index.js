function palindrome(str) {
  
    var m=str.replace(/[^A-Z0-9]/ig, "").toLowerCase();;
    
    var sep=m.split('').reverse().join("");
    
    if (m === sep)
    {
      return true;
    }
     return false;
  }
  
  
  
  console.log(palindrome("My age is 0, 0 si ega ym."));