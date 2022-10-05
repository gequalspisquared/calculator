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
    num1 = '';
    num2 = '';
    op = '';
    eq = '';
    cur = '';
    displayCalculator();
    current.textContent = '0';
}

function displayCalculator() {
    equation.textContent = num1 + op + num2;
    current.textContent = cur;
}

// the logic here got pretty messy and was written via trial and error
// hopefully this never needs to be touched
function processButton(e) {
    const btn = e.target;
    const pressed = btn.classList[1];

    // if pressed === 'clear'
    if (pressed === 'AC') {
        clearCalculator();
        return;
    }

    // if pressed === 'op'
    if (ops.includes(pressed)) {
        if (cur !== '') {
            num2 = Number(cur);
            if (num1 === '') {
                num1 = Number(cur);
                num2 = '';
            }
            if (op !== '') {
                const ans = operate(op, num1, num2);
                cur = ans;
                num1 = ans;
                num2 = '';
            }
            op = pressed;
            displayCalculator();
            cur = '';
            return;
        }
        op = pressed;
        cur = num1;
        displayCalculator();
        cur = '';
        return;
    }

    // if pressed === '='
    if (pressed === '=') {
        let ans;
        num2 = Number(cur);
        if (num1 === '') {
            num1 = Number(cur);
            num2 = '';
        }
        if (op !== '') {
            ans = operate(op, num1, num2);
            cur = ans;
        }
        displayCalculator();
        equation.textContent += '=';
        op = '';
        cur = '';
        num1 = ans;
        num2 = '';
        return;
    }

    // otherwise number
    if (!cur.includes('.') || pressed !== '.') cur += pressed;
    displayCalculator();
}

function addListeners() {
    btns.forEach(btn => btn.addEventListener('click', processButton));
}