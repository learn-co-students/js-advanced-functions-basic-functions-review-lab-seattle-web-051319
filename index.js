// Your code here
function saturdayFun(string="roller-skate") {
  return `This Saturday, I want to ${string}!`
}

function mondayWork(string='go to the office') {
  return `This Monday, I will ${string}.`
}

function wrapAdjective(string = '*') {
   return function(argument='special') {
    return `You are ${string}${argument}${string}!`
  }
}

const Calculator = {
  add: function(){return 1 + 3},
  subtract: function(){return 1 - 3},
  multiply: function(){return 1 * 3},
  divide: function(){return 10 / 5}
}

function actionApplyer(integer, array) {
  if (array.length === 0) {
    return integer
  }
  else {
    let result = integer
    for (let func of array) {
      result = func(result)
    }
    return result
  }
}
