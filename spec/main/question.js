'use strict';

function firstQuestion11 (answer11) {
    if (answer11 == "统一建模语言") {
        return 5;
    }
    return 0;
}


function firstQuestion12 (collection) {
    var sum=0;
    if(collection.includes("继承性"))
    {
        sum+=5;
    }
    if(collection.includes("多态性"))
    {
        sum+=5;
    }

    if(collection.indexOf("封装性")!=-1)
    {
        sum+=5;
    }

    return sum;
}
//console.log(firstQuestion12(["继承性","多态性","封装性"]));
function secondQuestion (answer21,answer22) {
    var sum=0;
    if (answer21=="B") {
        sum += 10;
    }
    if (answer22=="A") {
        sum += 10;
    }
    return sum;
}
//console.log(secondQuestion("B","A"));
function thirdQuestion (answer31,answer32) {
    var sum = 0;
    if (answer31=="ABD") {
        sum += 10;
    }
    if (answer32=="ABC") {
        sum += 10;
    }
    return sum;
}
function forthQuestion (answer41,answer42) {
    var sum = 0;

    if (answer41=="√") {
        sum += 10;
    }

    if (answer42=="×") {
        sum += 10;
    }
    return sum;
}

function fifthQuestion (answer5) {

    if (answer5 == "模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表现形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。") {
        return 20;
    }
    return 0;
}
module.exports = {
    firstQuestion11,
    firstQuestion12
};

// module.exports ={
//     firstQuestion11,
//     firstQuestion12
//     secondQuestion,
//     thirdQuestion,
//     forthQuestion,
//     fifthQuestion
// }