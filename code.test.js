//const { exportAllDeclaration } = require('@babel/types')
//const { exportAllDeclaration } = require('@babel/types')
//const { it } = require('node:test')
//const { describe } = require('yargs')
//const { describe } = require('yargs');
//const { describe } = require('yargs');
//const { it } = require('node:test');
//const { it } = require('node:test');
const {stringLength, reverseString, calc, capitalize } = require('./code')

it('examle', ()=>{
expect(1).toBe(1)
})

describe('Task 1', ()=>{
it('correctLength',()=>{
    const oi = 'Diego';
    expect(stringLength(oi)).toBe(5)
});
it('error',()=>{
    const oi = 'Diegoooooooo';
    expect(()=>stringLength(oi)).toThrow(Error)
});
});

describe('Task 2',()=>{
it('reverseStr',()=>{
    const li = 'CASA';
    expect(reverseString(li)).toBe('ASAC')
});

});
describe('Task 4', ()=>{
it('capital', ()=>{
    const ty = 'carlos'
    expect(capitalize(ty)).toBe('Carlos')
})

})

describe('Task 3', ()=>{
 it('add', ()=>{
    const a = 5,
      b=2;

      expect(calc.add(a,b)).toBe(7)
 });

 it('substract', ()=>{
    const a = 5,
    b=2;

    expect(calc.substract(a,b)).toBe(3)
 })

 it('divide', ()=>{
    const a = 5,
    b=2;

    expect(calc.divide(a,b)).toBe(2.5)
 })

 it('multiply', ()=>{
    const a = 5,
    b=2;

    expect(calc.multiply(a,b)).toBe(10)
 })

});








/* if(reverseString('CASA') !== 'ASAC'){
    throw new Error('It is not working')
} */
 



/* console.log(calc.multiply(5,2));// 10
console.log(calc.add(5,2)); // 7
console.log(calc.substract(5,2));//3
console.log(calc.divide(5, 2)); // 2.5
 */




//console.log(capitalize('diego'));