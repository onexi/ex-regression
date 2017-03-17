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

    sumX = x.reduce(function(total, element){
        return total + element;
    });

    sumY = y.reduce(function(total, element){
        return total + element;
    });

    sumXY = x.reduce(function(total, element, index){
        return total + (element * y[index]);
    });

    sumXX = x.reduce(function(total, element){
        return total + Math.pow(element,2);
    });

    /*
     * Calculate a and b for the formular:
     * y = x * b + a
     */


    // var b =

        var b = (sumXY - sumX*sumY/x.length) / (sumXX - Math.pow(sumX,2)/x.length);

    // var a =
    
        var a = (sumY - b*sumX)/x.length;


        exercise.linearRegression.b = function(){return b;};
        exercise.linearRegression.a = function(){return a;};

    return function(x){ return x*b + a; };
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
    graph(x,y,lr);
};

