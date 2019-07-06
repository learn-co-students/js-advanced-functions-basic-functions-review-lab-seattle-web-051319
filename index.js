function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function (activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
    return function(descrip="special") {
        return `You are ${flair}${descrip}${flair}!`
    }
}

let Calculator = {
    add: function(num1, num2) {
        return num1 + num2;
    },
    subtract: function(num1, num2) {
        return num1 - num2;
    }, 
    multiply: function(num1, num2) {
        return num1 * num2;
    }, 
    divide: function(num1, num2) {
        return num1 / num2;
    }
}

function actionApplyer(int, arr) {
    if (arr.length !== 0) {
        let arg = int;
        arr.forEach(func => {
            arg = func(arg);
        });
        return arg;
    } else {
        return int;
    }
}