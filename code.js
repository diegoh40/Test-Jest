

function stringLength(string){
    if(string.length > 0 && string.length < 10 ){
        // console.log('error');
        return string.length
    }else{
         throw new Error('has more than 10 charaters')
     }
}

function reverseString(string){
    return string.split('').reverse().join('')
  
  }


  class Calculator{
    add(x,y){
        return x + y
    }

    substract(x,y){
        return x - y
    }

    divide(x,y){
        return x/y
    }

    multiply(x,y){
        return x*y
    }
}

const calc = new Calculator()


function capitalize(string){
    let newString = string.slice(1)
    let firstC = string[0].toUpperCase()

    return firstC + newString 
}



module.exports = {stringLength, reverseString, calc, capitalize }