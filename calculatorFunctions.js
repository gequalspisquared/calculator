function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        console.log("RHEE DON'T BREAK MATH");
        return 'RHEEE';
    }

    return a / b;
}

function operate(operator, a, b) {
    if (operator === "+") return add(a, b);
    if (operator === "-") return subtract(a, b);
    if (operator === "*") return multiply(a, b);
    if (operator === "/") return divide(a, b);
    return null;
}

function clearCalculator() {
    num1 = NaN;
    num2 = NaN;
    op = null;
    eq = '';
    ans = '';
}

function processButton(e) {
    const btn = e.target;
    const pressed = btn.classList[1];

    if (num2 !== '' && ops.includes(pressed)) {
        ans = operate(op, num1, Number(num2));
        num1 = ans;
        num2 = '';
        op = pressed;
    }

    if (pressed === '=') {
        if (!num2) num2 = 0;
        if (!op) op = '+';
        num1 = Number(num1);
        num2 = Number(num2);
        ans = operate(op, num1, num2);
    }

    if (ops.includes(pressed)) {
        num1 = Number(num1);
        op = pressed;
    }

    if (op === '') {
        if (num1 === '0') num1 = '';
        num1 += pressed;
    } 

    if (typeof num1 === 'number' && !ops.includes(pressed) && pressed !== '=') {
        num2 += pressed;
    }

    equation.textContent = num1 + op + num2;
    answer.textContent = ans;
}

function addListeners() {
    btns.forEach(btn => btn.addEventListener('click', processButton));
}