const Add = require('./operators/add');
const Sub = require('./operators/sub');
const Mul = require('./operators/mul');
const Div = require('./operators/div');

class Calculator {
    constructor() {
        this.operator = {
            '+' : new Add(),
            '-' : new Sub(),
            '*' : new Mul(),
            '/' : new Div(),
        };
    }

    Check (operator, a, b) {
        if(! this.operator[operator])
            throw 'error';
        return this.operator[operator].run(a,b);
    }
}
module.exports = Calculator;