const sumAll = function(firstNum, lastNum)  {
    if (
        typeof firstNum !== 'number' ||
        typeof lastNum !== 'number' ||
        firstNum < 0 ||
        lastNum < 0 ||
        !Number.isInteger(firstNum) ||
        !Number.isInteger(lastNum)
    ) {
        return "ERROR";
    }
    if (firstNum > lastNum) {
        let tempOne = firstNum;
        let tempTwo = lastNum;
        firstNum = tempTwo;
        lastNum = tempOne;
    }

    let temp = 0;
    for (let i = firstNum; i <= lastNum; i++) {
        temp = temp + i;
    }
    return temp;
}
// Do not edit below this line
module.exports = sumAll;
