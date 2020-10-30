'use strict'

class Calculator {
    constructor(){
        this.result =0;
    }
    init(num){
        this.result = num;
        return this;
    }
    add(num){
        this.result = this.result + num;
        return this;
    }
    sub(num){
        this.result = this.result - num;
        return this;
    }
    mul(num){
        this.result = this.result * num;
        return this;
    }
    div(num){
        this.result = this.result / num;
        return this;
    }
    alert(){
        let result = this.result;
        setTimeout(function(){alert(result);}, 5000);
    }

}

//test
const calc = new Calculator();
console.log(
  calc.init(2).add(2).mul(3).div(4).sub(2).result // 1
);
calc.alert();
