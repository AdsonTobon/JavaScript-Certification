 
  const Unit = {
    //Se multiplica por 100 la moneda para no lidiar con
    //fraccionarios y evitar usar el método Math
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
  }
  
  
  function checkCashRegister(price, cash, cid) {
  //Resta el valor del precio al cambio  y 
  // se multiplica por 100 para continuar trabajando 
  // con números enteros. 
    let changeSum = cash * 100 - price * 100;
  //guarda el valor del cambio en una variable 
  // que será utilizada para los cálculos del cambio
    let changeSumCheck = changeSum;
 //Se declaran las variables donde se guardarán los resultados.
    let change = [];
    let status = '';
  //Guarda el total del efectivo de la registradora
    let cidSum = 0;
    // Filtra el arreglo 
    // remueve las denominaciones en cero y
    // se reversa el arreglo para empezar por la más alta
    let filteredCid = cid.filter(elem => elem[1] !== 0).reverse();
   //Primero se calculará si la registradora tiene suficiente efectivo
  //para hacerlo va por cada una de las demonimaciones filtradas
  // ejecutando la siguiente función empezando por la de 100
    filteredCid.forEach(elem => {   
  // el elemento aquí será un arreglo que guarde dos indices:
  // la moneda (curr[0]) y la cantidad (currSum[1]*100)
  // se sigue todo multiplicando por 100
      let curr = elem[0];
      let currSum = elem[1] * 100;
      //en cada iteración 
      // el total del efectivo se le suma la cantidad de
      //  cada una de las denominaciones filtradas.
      cidSum += currSum;
      //Se declara la variable que alojará el valor a cambiar
      let amount = 0;
      //Al foreach le agregamos otro bucle que dice que si mientras 
      // el cambio sea mayor o igual al objeto de las 
      // denominaciones y mientras el total haya quedado mayor a cero
      while (changeSum >= Unit[curr] && currSum > 0) {
      // Entonces si las dos condiciones se cumplen
      // la variable amount alojará la cantidad de 
      // denominaciones que estoy tomando de la 
      // registradora para hacer el cambio que a la vez
      // estoy incrementando cada vez que el cambio
      // sea mayor que la denominación.
        amount += Unit[curr];
        //cada que el cambio sea mayor al indice de la denominacion
        //  disminuye a la siguiente denominación de 
        // atrás para delante.
        // Es decir pasa de la 100 a la de 20
        // Y también el total de las 
        // denominaciones será su resta del objeto inicial
        changeSum -= Unit[curr];
        //Finalmente si el efectivo actual es mejor a cero
        // significa que no tenemos efectivo en ninguna 
        // denominación del filtro. 
        currSum -= Unit[curr];
      }
      // Después de salir del bucle 
      // se darán  tantas monedas o billetes
      // de cada denominación como se pueda 

      //Aquí validamos si la cantidad es diferente de 0
      // pondremos en el arreglo change el nombre de la
      // denominación y la cantidad dividida para poner 
      // finalmente el valor en centavos.
      if (amount !== 0) {
        change.push([curr, amount / 100]);
      }
    });
  // Aquí validamos si el cambio es mayor a cero 
  // devolverá el estatus de fondos insuficientes.
    if (changeSum > 0) {
      status = 'INSUFFICIENT_FUNDS';
  //Y el cambio será un arreglo vacío.
      change = [];
  //Si después de todo, el cambio queda igual a 0 y su
  // resta casa perfecto con la cantidad de efectivo.
    } else if (changeSum == 0 && changeSumCheck == cidSum) {
      //se cierra el caso
      status = 'CLOSED';
      //y el cambio será lo que queda
      change = cid;
      //sino sucede el estado seguirá abierto
    } else {
      status = 'OPEN';
    }
    return { 'status': status, 'change': change };
  }
  

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
