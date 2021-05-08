function countCombination(dices){

  dices = document.getElementById('inp_1').value
  const kostiPedia = {
    '10': 1,
    '5': 5,
    '100': 111,
    '20': 222,
    '30': 333,
    '40': 444,
    '50': 555,
    '60': 666,
    '200': 1111,
    '40': 2222,
    '60': 3333,
    '80': 4444,
    '100': 5555,
    '120': 6666,
    '1000': 11111,
    '200': 22222,
    '300': 33333,
    '400': 44444,
    '500': 55555,
    '600': 66666,
    '125': 12345,
    '250': 23456,
  }

  let result = 0;

  let one = ''; 
  let two = '';
  let three = '';
  let four = ''; 
  let five = '';
  let six = ''; 

  
  for (let num of dices) {
    if (num === '1') {
      one = one + num;
    }

    if (num === '2') {
      two = two + num; 
    }

    if (num === '3') {
      three = three + num; 
    }

    if (num === '4') {
      four = four + num; 
    }

    if (num === '5') {
      five = five + num; 
    }

    if (num === '6') {
      six = six + num; 
    }
  }
  
//-------------------------------->
    document.getElementById("result_dice1").innerHTML = "";
    document.getElementById("result_dice23456").innerHTML = "";
    document.getElementById("error").innerHTML = "";

    if (one.length === 1 & two.length === 1 & three.length === 1 
        & four.length === 1 & five.length === 1) {
         result = document.getElementById('result_dice12345').innerHTML = 125
         return 125
    }

    document.getElementById("result_dice1").innerHTML = "";
    document.getElementById("result_dice12345").innerHTML = "";

    if (two.length === 1 & three.length === 1 & six.length === 1
      & four.length === 1 & five.length === 1) {
        result = document.getElementById('result_dice23456').innerHTML = 250
         return 250
    }

    if ((one.length + two.length + three.length + four.length + five.length + six.length) > 5) {
      result = document.getElementById('error').innerHTML = 'Введите число длинной от 1 до 5 символов'
         return 'Введите число длинной от 1 до 5 символов'
    }

    if (one === '1') {
      result = result + 10; 
    }

    if (one === '11') {
      result = result + 20; 
    }

    if (one === '111') {
      result = result + 100; 
    }

    if (one === '1111') {
      result = result + 200; 
    }

    if (one === '11111') {
      result = result + 1000; 
    }

    if (five === '5') {
      result = result + 5; 
    }

    if (five === '55') {
      result = result + 10; 
    }

    if (five === '555') {
      result = result + 50; 
    }

    if (five === '5555') {
      result = result + 100; 
    }

    if (five === '55555') {
      result = result + 500; 
    }

    if (two === '222') {
      result = result + 20; 
    }

    if (two === '2222') {
      result = result + 40; 
    }

    if (two === '22222') {
      result = result + 200; 
    }

    if (three === '333') {
      result = result + 30; 
    }

    if (three === '3333') {
      result = result + 60; 
    }

    if (three === '33333') {
      result = result + 300; 
    }

    if (four === '444') {
      result = result + 40; 
    }

    if (four === '4444') {
      result = result + 80; 
    }

    if (four === '44444') {
      result = result + 400; 
    }

    if (six === '666') {
      result = result + 60; 
    }

    if (six === '6666') {
      result = result + 120; 
    }

    if (six === '66666') {
      result = result + 600; 
    }

  document.getElementById('result_dice1').innerHTML = result;
}