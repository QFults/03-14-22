function Arithmetic (a, b) {
  this.a = a
  this.b = b
  this.getA = () => this.a
  this.getB = () => this.b
  this.getSum = () => this.a + this.b
  this.getDifference = () => this.a - this.b
  this.getMultiplication = () => this.a * this.b
  this.getDivision = () => this.a / this.b
}

module.exports = Arithmetic
