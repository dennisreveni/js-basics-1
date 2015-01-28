function squaresOfMax(a, b, c) {
    // Ищем меньшее из 3 чисел, и 2 оставшихся присваеваем переменным max1 и max2
    if(a<=b && a<=c) {  // если а самое маленькое, b и с - самые больше
        return b*b+c*c;
    }else if(b<=a && b<=c){  // если b самое маленькое, а и с - самые больше
        return a*a+c*c;
    }else{  // если с самое маленькое, b и а - самые больше
        return b*b+a*a;
    }
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
        console.log('FizzBuzz')
      }else if((i%3)==0) {
        console.log('Fizz');
      }else if ((i%5)==0){
        console.log('Buzz');
      } else { 
        console.log(i)
      }
    }
}

function chessBoard(size){
  var shess = [];
  for (i=0; i<size; i++) {
    var str = '';
    if ( i % 2 !== 0 ){
      for (j=0; j<size; j++) {
        if ( j % 2 !== 0 ){str += " ";} else {str += "#";}
      }
    }else{
      for (j=0; j<size; j++) {
        if ( j % 2 !== 0 ){str += "#";} else {str += " ";}
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
