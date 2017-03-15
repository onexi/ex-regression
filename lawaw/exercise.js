var exercise = {};

exercise.linearRegression = function (x,y){
    /*
    Inputs:
    x - array of all x coordinates of raw data
    y - array of all y coordinates of raw data

    Outputs: a function that returns the y coordinate
            on the best fit line given an x coordinate
    Output should take the form return function(x){ return y}

    */

    var sumX = x.reduce(function(previous, current){ return previous + current; }, 0);
    var sumY = y.reduce(function(previous, current){ return previous + current; }, 0);
    var xy = [];
    for(var i=0; i<x.length; i++){ xy.push(x[i]*y[i]); }
    var sumXY = xy.reduce(function(previous, current){ return previous + current; }, 0);
    var xx = [];
    for(var j=0; j<x.length; j++){ xx.push(x[j]*x[j]); }
    var sumXX = xx.reduce(function(previous, current){ return previous + current; }, 0);
    //console.log('sumX: ' + sumX);
    //console.log('sumY: ' + sumY);
    //console.log('sumXY: ' + sumXY);
    //console.log('sumXX: ' + sumXX);

    /*
     * Calculate a and b for the formula:
     * y = x * b + a
     */


    // var b =
    exercise.linearRegression.b = function(){
        var b = (sumXY - sumX*sumY/x.length)/(sumXX - sumX*sumX/x.length);
        return b;
    };
    //console.log('b: ' + exercise.linearRegression.b());

    // var a =
    exercise.linearRegression.a = function(){
        var a = (sumY - exercise.linearRegression.b()*sumX)/x.length;
        return a;
    };
    //console.log('a: ' + exercise.linearRegression.a());

    return function(x){ return x*exercise.linearRegression.b() + exercise.linearRegression.a(); };
};


function getRandomNumber()  { return Math.floor(Math.random()*100);}

exercise.run =  function (){
    var x  = [];
    var y  = [];
    var lr = [];
    var length = 10;

    // get random points
    for (var i=0; i<length; i++){
        x[i] = getRandomNumber();
        y[i] = getRandomNumber();
    }
    //console.log('x: ' + x);
    //console.log('y: ' + y);

    // get linear regression equation
    lr = exercise.linearRegression(x, y);
    graph(x,y,lr);
};

