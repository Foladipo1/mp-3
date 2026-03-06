import {useState} from "react";

function power(x: number, y: number) {

    let base = 1
    for (let i = 1; i <= y; i++) {
        base = base * x;
    }
    return base;
}
export default function useCalculator() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);



    function calc(operation:string){
        if (operation === '+'){setResult(num1 + num2);}
        if (operation === '-'){setResult(num1 - num2);}
        if (operation === '*'){setResult(num1 * num2);}
        if (operation === '/'){setResult(num1 / num2);}
        if (operation === '**'){setResult(power(num1, num2));}

    }
    return {num1, num2, setNum1, setNum2, result, calc};
}


