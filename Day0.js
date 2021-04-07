// https://www.codewars.com/kata/56f6919a6b88de18ff000b36/train/javascript

// ========= WHAT IS GIVEN ==============

// function howManyDalmations(numer :
  
//   var dogs ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"];
  
//   var respond = number <= 10 ? dogs[0] (number <= 50 ? dogs[1] : (number = 101  dogs[3] : dogs[2]
  
// return respond

//================================================

function howManyDalmatians(number) {
	if (number <= 10) {
		return 'Hardly any';
	} else if (number <= 50) {
		return 'More than a handful!';
	} else if (number === 101) {
		return '101 DALMATIANS!!!';
	} else {
		return "Woah that's a lot of dogs!";
	}
}
