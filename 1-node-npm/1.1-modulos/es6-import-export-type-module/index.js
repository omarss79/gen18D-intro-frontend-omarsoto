import {sum, substract} from './modules/sum-substract.js';
import {multiply, divide} from './modules/multipli-divide.js';

function main(){
    const num1 = 20;
    const num2 = 7;

    const sumResult = sum(num1, num2);
    console.log("Suma: "+sumResult);
    
    const subResult = substract(num1, num2);
    console.log("Resta: "+subResult);
    
    const mulResult = multiply(num1, num2);
    console.log("Multiplicacion: "+mulResult);
    
    const divResult = divide(num1, num2);
    console.log("Division: "+divResult);

}

main();