let left;
let op;
let right;

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
    return a / b;
}

function operator(left, op, right) {
    left = parseInt(left);
    right = parseInt(right);
    if (op === "+") {
        return add(left, right);
    }

    if (op === "-") {
        return subtract(left, right);
    }

    if (op === "*") {
        return multiply(left, right);
    }

    if (op === "/") {
        return divide(left, right);
    }
}
