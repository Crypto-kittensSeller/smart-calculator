class SmartCalculator {
  constructor(initialValue) {
    this.initialValue = initialValue;
    this.result = "" + this.initialValue;
    
  }

  add(number) {
    this.result = this.result + "+" + number;
    return this;
  }
  
  subtract(number) {
    this.result = this.result + "-" + number;
    return this;
  }

  multiply(number) {
    this.result = this.result + "*" + number;
    return this;
  }

  devide(number) {
    this.result = this.result + "/"+ number;
    return this;
  }

  pow(number) {
    this.result = this.result +  "**"+ number;
    return this;
    
  }



  valueOf() {
    return eval(this.result);
  }    
}

module.exports = SmartCalculator;
