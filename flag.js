//This code outputs the US flag.

'use strict'

var line = "";
/*=====UPPER HALF OF THE FLAG=====*/

/*=====STAR RECTANGLE=====*/
for (var y = 0; y <= 6; y++){
  for (var x = 0; x <= 10; x++){

      if (x == 0) line = line + '|';
      if ((y+x) % 2 == 0) {
        line = line + ' * ';
      } else line = line + '   ';
  }

/*=====STRIPES CONTINUING STAR RECATNGLE=====*/
  for (x = 11; x <= 58; x++){
    if (y % 2 == 0) {
      line = line + '#';
    } else line = line + ':';
  }
  line = line + '|' + '\n'
}

/*=====LOWER HALF OF THE FLAG====*/
for (y = 7; y <=12; y++){
  for ( x = 0; x <= 80; x++){

      if (x == 0) line = line + '|';
      if (y % 2 == 0) {
        line = line + '#';
      } else line = line + ':';
    }
    line = line + '|' + '\n'
}

console.log(line);
