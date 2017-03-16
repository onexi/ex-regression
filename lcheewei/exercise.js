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

    var sumX = 0;
    var sumY = 0;
    var sumXY  = 0;
    var sumXX = 0;
    
    sumX = x.reduce (function (prev, curr){
        return prev + curr;
    }, 0);

    sumY = y.reduce (function (prev, curr){
        return prev + curr;
    }, 0);
 
    sumXX = x.reduce (function (prev, curr){
        return prev+ curr*curr;
    }, 0);

    x.forEach(function (item, i, list){
        sumXY += item * y[i];
        return;     
    });
 
    var b; 
    exercise.linearRegression.b = function(){
        b = ( sumXY - (sumX * sumY) / x.length) / (sumXX - sumX*sumX/x.length);
        return b ;
    };

    var a; 
    exercise.linearRegression.a = function(){
        a = ( sumY - b*sumX) / x.length; 
        return a;
    };
    b = exercise.linearRegression.b();
    a = exercise.linearRegression.a();

    return function(x){return x*b + a;};
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

    // get linear regression equation
    lr = exercise.linearRegression(x, y);
    //console.log("lr: "+lr);
    graph(x,y,lr);
};

