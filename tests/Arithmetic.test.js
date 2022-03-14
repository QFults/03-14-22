const Arithmetic = require('../Arithmetic.js')

describe('Arithmetic', () => {
  describe('Initialization', () => {
    it('should return value of "a" when run the .getA() function', () => {
      const obj = new Arithmetic(5, 7)
      expect(obj.getA()).toEqual(5)
    })
    it('should return value of "b" when run the .getB() function', () => {
      const obj = new Arithmetic(5, 7)
      expect(obj.getB()).toEqual(7)
    })
  })
  describe('Core Functionality', () => {
    it('should return sum of "a" & "b" when run the .getSum() function', () => {
      const obj = new Arithmetic(5, 7)
      expect(obj.getSum()).toEqual(12)
    })
    it('should return difference of "a" & "b" when run the .getDifference() function', () => {
      const obj = new Arithmetic(5, 7)
      expect(obj.getDifference()).toEqual(-2)
    })
    it('should return multiplication of "a" & "b" when run the .getMultiplication() function', () => {
      const obj = new Arithmetic(5, 7)
      expect(obj.getMultiplication()).toEqual(35)
    })
    it('should return division of "a" & "b" when run the .getDivision() function', () => {
      const obj = new Arithmetic(5, 7)
      expect(obj.getDivision()).toEqual(0.7142857142857143)
    })
    it('should return remainder of division of "a" & "b" when run the .getRemainder() function', () => {
      const obj = new Arithmetic(10, 5)
      expect(obj.getRemainder()).toEqual(0)
    })
  })
})