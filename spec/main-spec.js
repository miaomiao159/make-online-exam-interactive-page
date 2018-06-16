'use strict';
// const main = require("./main/main.js");
// var question = require('./main/question.js');
var firstQuestion11 = require('./main/question.js');
var firstQuestion12 = require('./main/question.js');

describe('firstQuestion11', function () {

    it('should pass', function () {
        var result1 = firstQuestion11("统一建模语言");
        // var result2 = firstQuestion12(["fh"]);
        // var result=result1+result2;
        expect(result1).toEqual(5);
    });
    // it('should pass', function(){
    //     var result=thirdQuestion("ABD");
    //     expect(result).toEqual(10);
    // });

});