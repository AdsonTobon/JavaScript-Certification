function convertToRoman(num) {

    // var nums=[1,2,3,4,5,6,7,8,9,10,50,90,100,400,500,900,1000]
    // var rom=["I","II","III","IV","V","VI","VII","VIII","IX","X","L","XC","C","CD","D","CM","M"]
     
    
    //  var nums=[1,4,5,9,10,40,50,90,100,400,500,900,1000]
     var numeros=[1000,900,500,400,100,90,50,40,10,9,5,4,1]
     var rom=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
    // var rom=["I","IV","V","IX","XL","X","L","XC","C","CD","D","CM","M"]
    
     var romano="";
     for(var i=0;i<numeros.length;i++){
       while(numeros[i] <= num){
         romano+=rom[i];
         num-=numeros[i];
       }
     }
    
     return romano;
    }
    
    
    
    
    console.log(convertToRoman(12));
    