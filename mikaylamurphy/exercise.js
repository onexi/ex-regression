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
    for (i = 0; i < x.length; i++){
        x_val = x[i];
        y_val = y[i];
        sumX += x_val;
        sumXX += x_val * x_val;
        sumY += y_val;
        sumXY += x_val * y_val;
    }


    /*
     * Calculate a and b for the formular:
     * y = x * b + a
     */


    // var b =
    b = (sumXY - ((sumX * sumY) / x.length)) / (sumXX - ((sumX * sumX)/x.length))
    /* exercise.linearRegression.b = function(){
        return b;
    }; */

    a = (sumY - (b * sumX)) / x.length
    // var a =
   /* exercise.linearRegression.a = function(){
        return a;
    }; */

    return function(x){
        return x * b + a};
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

