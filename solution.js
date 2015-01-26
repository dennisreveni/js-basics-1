function squaresOfMax(a, b, c) {
    var result;
    var max1;
    var max2;
    // Ищем меньшее из 3 чисел, и 2 оставшихся присваеваем переменным max1 и max2
    if(a<=b && a<=c) {  // если а самое маленькое, b и с - самые больше
        max1 = b;
        max2 = c;
    }else if(b<=a && b<=c){  // если b самое маленькое, а и с - самые больше
        max1 = a;
        max2 = c;
    }else if(c<=a && c<=b){  // если с самое маленькое, b и а - самые больше
        max1 = a;
        max2 = b;
    }
    result = max1*max1 + max2*max2;  // вычисляем сумму квадратов
    return result;
}

function drawTriangle() {
    var str = '#';
    for(i=0; i<7; i++){ 
      console.log(str); //выводим строку в консоль
      str += "#"; // добавляем к строке ещё одну решетку
    }
}

function fizzBuzz() {
    var str;
    for(i=1; i<=100; i++){
      if ((i%3)==0 && (i%5)==0){
        str="FizzBuzz"
      }else if((i%3)==0) {
        str = 'Fizz';
      }else if ((i%5)==0){
        str = 'Buzz';
      } else { 
        str = i; 
      }
      console.log(str)
    }
}

function chessBoard(size){
  var shess = [];
  for (i=0; i<size; i++) {
    var str = '';
    if ( i % 2 !== 0 ){
      for (j=0; j<size; j++) {
        if ( j % 2 !== 0 ){str += "#";} else {str += " ";}
      }
    }else{
      for (j=0; j<size; j++) {
        if ( j % 2 !== 0 ){str += " ";} else {str += "#";}
      }
    }
    shess.push(str)
  }
  chess_desc = shess.join('\n');
  return chess_desc;
}

module.exports.squaresOfMax = squaresOfMax;
module.exports.drawTriangle = drawTriangle;
module.exports.fizzBuzz = fizzBuzz;
module.exports.chessBoard = chessBoard;
