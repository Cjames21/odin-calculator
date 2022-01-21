// Global Variables
const OPERATORS = [" + ", " - ", " * ", " / "];

var equation = [];

    // Event listeners and linking buttons to variables

    var viewport = document.getElementById("viewport");

    var btnZero = document.getElementById("btn-0");
    btnZero.addEventListener("click", () => {
        numberPressed(0);
    })

    var btnOne = document.getElementById("btn-1");
    btnOne.addEventListener("click", () => {
        numberPressed(1);
    })

    var btnTwo = document.getElementById("btn-2");
    btnTwo.addEventListener("click", () => {
        numberPressed(2);
    })

    var btnThree = document.getElementById("btn-3");
    btnThree.addEventListener("click", () => {
        numberPressed(3);
    })

    var btnFour = document.getElementById("btn-4");
    btnFour.addEventListener("click", () => {
        numberPressed(4);
    })

    var btnFive = document.getElementById("btn-5");
    btnFive.addEventListener("click", () => {
        numberPressed(5);
    })

    var btnSix = document.getElementById("btn-6");
    btnSix.addEventListener("click", () => {
        numberPressed(6);
    })

    var btnSev = document.getElementById("btn-7");
    btnSev.addEventListener("click", () => {
        numberPressed(7);
    })

    var btnEight = document.getElementById("btn-8");
    btnEight.addEventListener("click", () => {
        numberPressed(8);
    })

    var btnNine = document.getElementById("btn-9");
    btnNine.addEventListener("click", () => {
        numberPressed(9);
    })

    var btnDec = document.getElementById("btnDec");
    btnDec.addEventListener("click", () => {
        numberPressed(".");
    })

    var btnDiv = document.getElementById("btnDiv");
    btnDiv.addEventListener("click", () => {
        numberPressed(" / ");
    })

    var btnMult = document.getElementById("btnMult");
    btnMult.addEventListener("click", () => {
        numberPressed(" * ");
    })

    var btnSub = document.getElementById("btnSub");
    btnSub.addEventListener("click", () => {
        numberPressed(" - ");
    })

    var btnAdd = document.getElementById("btnAdd");
    btnAdd.addEventListener("click", () => {
        numberPressed(" + ");
    })

    var btnEquals = document.getElementById("btnEquals");
    btnEquals.addEventListener("click", () => {
        /* Go through the equation and evalutae via BEDMAS
            - organize equation array into full numbers separated by operators
            - check new array for operators in order of bedmas
                - return new array with resolved operation
        */
        var solution = solveEquation();
        viewport.textContent = solution;
    })

    var btnClr = document.getElementById("btnClr");
    btnClr.addEventListener("click", () => {
        viewport.textContent = "";
        equation = [];
    })

    // End of event listeners and button links

// Support functions

    function numberPressed(num) {
        var oldViewport = viewport.textContent;
        oldViewport += num.toString();
        viewport.textContent = oldViewport;
        equation.push(num);
    }

    function solveEquation() {
        var leftNum = "";
        var rightNum = "";
        var operator;

        var solution;

        var equationComplete = false;

        while(equationComplete == false) {
            var operatorNum = 0;
            for(let i = 0; i < equation.length; i++) {
                if(equation[i] != OPERATORS[0] && equation[i] != OPERATORS[1] && equation[i] != OPERATORS[2] && equation[i] != OPERATORS[3]) {
                    if(operatorNum == 0) {
                        leftNum += equation[i].toString();
                    } else if(operatorNum == 1) {
                        rightNum += equation[i].toString();
                    } else if(operatorNum == 2) {
                        // reduce both arrays to full numbers and do the operation. 
                        // The result of this operation will be the new left num array
                        solution = operate(parseFloat(leftNum), parseFloat(rightNum), operator);
                        operatorNum = 1;
                    }
                } else {
                    operatorNum++;
                    operator = equation[i];
                }


            }
        }

        return solution;

    }
    
    function operate(num1, num2, op) {
        var result;
    
        switch(op) {
            case OPERATORS[0]:
                result = addNums(num1, num2);
            case OPERATORS[1]:
                result = subNums(num1, num2);
            case OPERATORS[2]:
                result = multNums(num1, num2);
            case OPERATORS[3]:
                result = divNums(num1, num2);        
        }
        return result;
    }
    
    function addNums(num1, num2) {
        return num1 + num2;
    }
    
    function subNums(num1, num2) {
        return num1 - num2;
    }
    
    function multNums(num1, num2) {
        return num1 * num2;
    }
    
    function divNums(num1, num2) {
        if(num2 == 0) {
            console.log("divNums trying to divide by zero");
            return null;        
        }
        return num1/num2;
    }

