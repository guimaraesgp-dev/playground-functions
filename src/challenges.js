// Desafio 1
function compareTrue(parametro1, parametro2) {
  if(parametro1 === true && parametro2 === true){
    return true;
  } if (parametro1 === false && parametro2 === false) {
    return false;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
  }

// Desafio 3
function splitSentence(string) {
  return string.split (" ");
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
} 

// Desafio 5
function footballPoints(wins,ties) {
  return (wins * 3 + ties * 1);
};

// Desafio 6
function highestCount(array) {
  let countNumber = 0;
  let highestNumber = array[0];
  for (let i of array) {
    if ((i < 0) || (i < highestNumber)) {
      countNumber = 0;
    }
    highestNumber = i;
    countNumber += 1;
  }
  return countNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = mouse - cat1;
  let distanciaCat2 = mouse - cat2;
  if (Math.abs(distanciaCat1) < Math.abs(distanciaCat2)) { 
    return 'cat1';
  } if (Math.abs(distanciaCat1) > Math.abs(distanciaCat2)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let i of array) {
    if (i % 15 === 0) {
      result.push('fizzBuzz');
    } else if (i % 3 === 0) {
      result.push('fizz');
    } else if (i % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(param1) {
    let codigo = '';
    for (let index in param1) {
      if (param1[index] === 'a') {
        codigo += 1;
      } else if (param1[index] === 'e') {
        codigo += 2;
      } else if (param1[index] === 'i') {
        codigo += 3;
      } else if (param1[index] === 'o') {
        codigo += 4;
      } else if (param1[index] === 'u') {
        codigo += 5;
      } else {
        codigo += param1[index];
      }
    }
    return codigo;
}

function decode(param2) {
  let texto = '';
  for (let index2 in param2) {
    if (param2[index2] === '1') {
      texto += 'a';
    } else if (param2[index2] === '2') {
      texto += 'e';
    } else if (param2[index2] === '3') {
      texto += 'i';
    } else if (param2[index2] === '4') {
      texto += 'o';
    } else if (param2[index2] === '5') {
      texto += 'u';
    } else {
      texto += param2[index2];
    }
  }
  return texto;
}

// Desafio 10
function techList(tech, name) {
   let theArray = [];
  let theTech = tech.sort();
  if (tech.length === 0) {
    theArray = 'Vazio!';
  } else {
    for (let i = 0; i <= theTech.length - 1; i += 1) {
      theArray.push({ tech: theTech[i], name: name });
    }
  }
  return theArray;
} 

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};