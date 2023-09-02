// 1. tool = garaas to avna
// 2. garaas operator(+,-,*,%)
// 3. too2 = garaas too avna
// 4.alert deer bodoj gargaj irne
var too1 = +prompt ("bodoh too oruulna uu");
var op = prompt("opertor oruulna uu");
var too2 = +prompt("too 2 oruuln uu");
switch(op){
	case "+":
		alert(too1+too2);
		break;
	case "-":
		alert(too1-too2);
		break;
	case "/":
		alert(too1/too2);
		break;
	case "*":
		alert(too1*too2);
		break
}