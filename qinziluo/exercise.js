var exercise = {};

exercise.linearRegression = function (x, y) {
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
    var sumXY = 0;
    var sumXX = 0;

    /*sumX=x.reduce(function(previous,current){
        return previous+=current;
    },0);
    sumY=y.reduce(function(previous,current){
        return previous+=current;
    },0);
    sumXX=x.reduce(function(previous,current){
        return previous=previous*current;
    },0);
    var xy=[];
    
    for (var i=0; i<x.length;i++){
        xy[i]=x[i]*y[i];
    }
    sumXY=sum(xy);*/
    for (i = 0; i < x.length; i++) {
        sumX += x[i];
        sumY += y[i];
        sumXX += x[i] * x[i];
        sumXY += x[i] * y[i];
    }
    var n = x.length;

    /*
     * Calculate a and b for the formular:
     * y = x * b + a
     */


    var b = (sumXY - sumX * sumY / n) / (sumXX - sumX * sumX / n);
    console.log(b);
    exercise.linearRegression.b = function () {
       
        return b;
    };

    var a =  (sumY - (b * sumX)) / n;
    console.log(a);
    exercise.linearRegression.a = function () {
       
        return a;
    };

    return function(x){
        return  x * b + a;
    };
};


function getRandomNumber() { return Math.floor(Math.random() * 100); }

exercise.run = function () {
    var x = [];
    var y = [];
    var lr = [];
    var length = 10;

    // get random points
    for (var i = 0; i < length; i++) {
        //x[i] = i;
        //y[i] = i + 1;
        x[i] = getRandomNumber();
        y[i] = getRandomNumber();
    }

    // get linear regression equation
    lr = exercise.linearRegression(x, y);
    graph(x, y, lr);
};

