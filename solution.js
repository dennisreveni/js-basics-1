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
    for(i=0; i<6; i++){  // цыкл до 6, т.к. отсчет от 0 начинается
      console.log(str); //выводим строку в консоль
      str += "#"; // добавляем к строке ещё одну решетку
    }
}

function fizzBuzz() {
    var str;
    for(i=0; i<99; i++){
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
  str1 = ' #'; //начальные значения первой
  str2 = '# '; // и второй строки
  if(size>1){ // проверяем, что бы число было больше 1
    //проверяем четное или нет число
    if(size & 1){ // если не четное
      console.log(size);
      for(i=1; i<size/2; i++){ // цикл проходит size/2 раза, т.к. у нас в строке  по 2 символа
        str1 += ' #';
        str2 += '# ';
      }
      str1 += ' ';  // добавляем по одному символу в строки, т.к. сейчас там size-1 символов
      str2 += '#';
      for(i=1; i<size/2; i++){ // цикл начинаем с 1. В итоге выводятся size-1 строк
        console.log(str1);
        console.log(str2);
      }
      console.log(str1); // добавляем недостающую строку
    }else{  // если четное (здесь все проще, думаю можно без комментариев)
      for(i=1; i<size/2; i++){
        str1 += ' #';
        str2 += '# ';
      }
      for(i=0; i<size/2; i++){
      console.log(str1);
      console.log(str2);
      }      
    }
  }else{
    return "Введите число больше 1";
  }
  return 'шахматная доска '+size+'*'+size;
}

module.exports.squaresOfMax = squaresOfMax;
module.exports.drawTriangle = drawTriangle;
module.exports.fizzBuzz = fizzBuzz;
module.exports.chessBoard = chessBoard;
