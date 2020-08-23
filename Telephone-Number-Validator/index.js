function telephoneCheck(str) {
    var excepciones = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return excepciones.test(str);
  }
  console.log(telephoneCheck("555-555-5555"));