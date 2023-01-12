const form = document.getElementById("form");
const num = document.getElementById("num");
const converted = document.getElementById("converted");

const ones = {
  0: "zero",
  1: "um",
  2: "dois",
  3: "tres",
  4: "quatro",
  5: "cinco",
  6: "seis",
  7: "sete",
  8: "oito",
  9: "nove",
  10: "dez",
  11: "onze",
  12: "doze",
  13: "treze",
  14: "catorze",
  15: "quinze",
  16: "dezesseis",
  17: "dezessete",
  18: "dezoito",
  19: "dezenove",
};

const enta = {
  2: "vinte",
  3: "trinta",
  4: "quarenta",
  5: "cinquenta",
  6: "sessenta",
  7: "setenta",
  8: "oitenta",
  9: "noventa",
};

const cento = {
  1: "cento",
  2: "duzentos",
  3: "trezentos",
  4: "quatrocentos",
  5: "quinhentos",
  6: "seiscentos",
  7: "setecentos",
  8: "setecentos",
  9: "novecentos",
}

const mil = {
    1: "mil",
    2: "dois mil",
    3: "tres mil",
    4: "quatro mil",
    5: "cinco mil",
    6: "seis mil",
    7: "sete mil",
    8: "oito mil",
    9: "nove mil",
}

form.onsubmit = (event) => {
  event.preventDefault();

  //NUMEROS DO 0 AO 19 
  if (+num.value in ones) {
    converted.innerHTML = ones[+num.value];
  }

  //de 20 a 99
  const numArray = num.value.split("");
  //Corrige o problema de "vinte e zero"
    if (numArray.length === 2 && +num.value[1] ===0 && +num.value > 19){
    converted.innerHTML = enta[numArray[0]]
  }else if (numArray.length === 2 && +num.value > 19) {
    converted.innerHTML = enta[numArray[0]] + " " + ones[numArray[1]];
  } 

  //CLASSE DOS 2 ZEROS
  if (numArray.length === 3) {
    //numeros com 0 no meio ex: 701, 101 ... 709

    //corrige problema de duzentos e zero
    if (+numArray[1] === 0 && +numArray[2] === 0 ){
        converted.innerHTML = 
            cento[numArray[0]]
    } else if (+numArray[2] === 0 && +numArray[1] > 1 ){
        converted.innerHTML = 
        cento[numArray[0]] +
        " e " +
        enta[numArray[1]]
    }  
    else if (+numArray[1] === 0) {
      converted.innerHTML =
        cento[numArray[0]] + " e " + ones[numArray[2]];
    } else if (+numArray[1] < 2) {
      converted.innerHTML =
        cento[numArray[0]] +
        " e " +
        //vai ate o 19 essa condicao
        ones[+[numArray[1], numArray[2]].join("")];
    } else {
      converted.innerHTML =
        cento[numArray[0]] +
        " e " +
        enta[numArray[1]] +
        " " +
        ones[numArray[2]];
    }
  }

  //CLASSE DOS MIL
  if (numArray.length === 4) {
    // trata 0 das casas 1,2,3 do array
    if (+numArray[1] === 0 && +numArray[2] === 0 && +numArray[3] === 0) {
        converted.innerHTML =
        mil[numArray[0]]
    }

    //trata os 0 da 2 e 3 casa do array
    else if (+numArray[2] === 0 && +numArray[3] === 0)
        converted.innerHTML =
        mil[numArray[0]] +
        " e " +
        cento[numArray[1]]

    // trata os 0 das 1 e 2 casas do array
    else if (+numArray[1] === 0 && +numArray[2] === 0)
    converted.innerHTML =
    mil[numArray[0]] +
    " e " +
    ones[numArray[3]]
    
    // trata o 0 da 2 casa do array
    else if (numArray[2] < 2 && +numArray[1] === 0)  { 
        converted.innerHTML =
          mil[numArray[0]] +
          " e " +
          ones[+[numArray[2], numArray[3]].join("")] 
      }
    else if (+numArray[2] < 2 ) {
        converted.innerHTML =
          mil[numArray[0]] +
          " " +
          cento[numArray[1]] +
          " e "  +
          ones[+[numArray[2], numArray[3]].join("")];
      } 
    // trata os 0 da 3 casa do array expecial pro 10
    else if (+numArray[2] === 0) {
        converted.innerHTML =
          mil[numArray[0]] +
          " " +
          cento[numArray[1]]+
          " e " +
          ones[+[numArray[2], numArray[3]].join("")];
    }
    // Trata os 0 da 1 casa do array e de 1 a 19
    else if (+numArray[1] === 0 && +numArray[2] < 2 ) {
        converted.innerHTML =
          mil[numArray[0]] +
          " e"  +
          ones[+[numArray[2], numArray[3]].join("")];
      } 
      // condicao que trata o 0 do array 1 e 3 exp 1020
      else if (+numArray[1] === 0 && +numArray[3] === 0)  { 
        converted.innerHTML =
          mil[numArray[0]] +
          " e " +
          enta[numArray[2]] 
      }

       else if (+numArray[1] === 0 )  {
        // trata os 0 da 1 casa do array do 20 a 99
        converted.innerHTML =
          mil[numArray[0]] +
          " e " +
          enta[numArray[2]] +
          " e " +
          ones[numArray[3]]
      } else {
      converted.innerHTML = 
        mil[numArray[0]] +
        " " +
        cento[numArray[1]] +
        " e " +
        enta[numArray[2]] +
        " e " +
        ones[numArray[3]];
    }
  }
};